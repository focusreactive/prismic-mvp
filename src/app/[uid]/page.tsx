import { Metadata } from "next";
import { notFound } from "next/navigation";

import { filter } from "@prismicio/client";
import { SliceZone } from "@prismicio/react";

import { createClient } from "@/prismicio";
import { components } from "@/slices";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

type Params = { uid: string };

export default async function Page({ params }: { params: Promise<Params> }) {
  const { uid } = await params;
  const client = createClient();
  const page = await client.getByUID("page", uid).catch(() => notFound());

  // const header = page.data.header
  //   ? await client.getByID(page.data.header.id)
  //   : await client.getSingle("header");
  //
  // const footer = page.data.footer
  //   ? await client.getByID(page.data.footer.id)
  //   : await client.getSingle("footer");

  return (
    <>
      {/*<Header data={header.data} />*/}
      <main>
        <SliceZone slices={page.data.slices} components={components} />
      </main>
      {/*<Footer data={footer.data} />*/}
    </>
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { uid } = await params;
  const client = createClient();
  const page = await client.getByUID("page", uid).catch(() => notFound());

  return {
    title: page.data.title,
    description: page.data.meta_description,
    openGraph: {
      title: page.data.meta_title ?? undefined,
      images: [{ url: page.data.meta_image.url ?? "" }],
    },
  };
}

export async function generateStaticParams() {
  const client = createClient();

  // Get all pages from Prismic, except the homepage.
  const pages = await client.getAllByType("page", {
    filters: [filter.not("my.page.uid", "home")],
  });

  return pages.map((page) => ({ uid: page.uid }));
}

import { type Metadata } from "next";

import { SliceZone } from "@prismicio/react";

import { createClient } from "@/prismicio";
import { components } from "@/slices";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export default async function Home() {
  const client = createClient();
  const home = await client.getByUID("page", "home");
  const header = await client.getSingle("header");
  const footer = await client.getSingle("footer");

  return (
    <>
      <Header data={header.data} />
      <main>
        <SliceZone slices={home.data.slices} components={components} />
      </main>
      <Footer data={footer.data} />
    </>
  );
}

export async function generateMetadata(): Promise<Metadata> {
  const client = createClient();
  const home = await client.getByUID("page", "home");

  return {
    title: home.data.title,
    description: home.data.meta_description,
    openGraph: {
      title: home.data.meta_title ?? undefined,
      images: [{ url: home.data.meta_image.url ?? "" }],
    },
  };
}

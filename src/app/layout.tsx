import "@/global.css";
import { PrismicPreview } from "@prismicio/next";
import { createClient, repositoryName } from "@/prismicio";
import { Gloock, Nunito } from "next/font/google";
import { cn } from "@/lib/utils";
import { Header } from "@/components/Header";
import { Content } from "@prismicio/client";

const nunito = Nunito({
  subsets: ["latin"],
  variable: "--font-nunito",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});
const gloock = Gloock({
  subsets: ["latin"],
  variable: "--font-gloock",
  weight: ["400"],
  display: "swap",
});

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const client = createClient();
  const home = await client.getByUID("page", "home");
  const header =
    home.data.header &&
    home.data.header.link_type === "Document" &&
    ((await client.getByID(home.data.header.id)) as Content.HeaderDocument);

  return (
    <html lang="en">
      <body className={cn(nunito.variable, gloock.variable)}>
        {header && <Header data={header.data} />}
        <main className={"mx-auto max-w-360"}>{children}</main>
      </body>
      <PrismicPreview repositoryName={repositoryName} />
    </html>
  );
}

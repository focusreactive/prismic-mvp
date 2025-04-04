import "@/global.css";
import { PrismicPreview } from "@prismicio/next";
import { repositoryName } from "@/prismicio";
import { Gloock, Nunito } from "next/font/google";
import { cn } from "@/lib/utils";

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
  return (
    <html lang="en">
      <body className={cn(nunito.variable, gloock.variable)}>{children}</body>
      <PrismicPreview repositoryName={repositoryName} />
    </html>
  );
}

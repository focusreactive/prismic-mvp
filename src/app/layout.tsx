import { PrismicPreview } from "@prismicio/next";
import { repositoryName } from "@/prismicio";
import { Inter } from "next/font/google";
import "@/global.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.variable}>
        <main className={"mx-auto max-w-360"}>{children}</main>
      </body>
      <PrismicPreview repositoryName={repositoryName} />
    </html>
  );
}

import { PrismicPreview } from "@prismicio/next";
import { repositoryName } from "@/prismicio";
import { Gloock, Nunito } from "next/font/google";
import "@/global.css";
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn(nunito.variable, gloock.variable)}>
        <main className={"mx-auto max-w-360"}>{children}</main>
      </body>
      <PrismicPreview repositoryName={repositoryName} />
    </html>
  );
}

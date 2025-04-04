import type * as prismic from "@prismicio/client";
import { PrismicRichText } from "@prismicio/react";
import { ComponentProps } from "react";

type SectionProps = {
  children: React.ReactNode;
  head?: {
    title: prismic.KeyTextField;
    text: prismic.RichTextField;
  };
} & ComponentProps<"section">;

export function Section({ children, head }: SectionProps) {
  return (
    <section className="mt-16 mb-20 px-10">
      {head && (
        <div className={"prose mb-8"}>
          <h2>{head.title}</h2>
          <PrismicRichText field={head.text} />
        </div>
      )}

      {children}
    </section>
  );
}

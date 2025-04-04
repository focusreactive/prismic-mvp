import { FC } from "react";
import { Content } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import { Section } from "@/components/ui/section";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

/**
 * Props for `Accordion`.
 */
export type AccordionSliceProps = SliceComponentProps<Content.AccordionSlice>;

/**
 * Component for "Accordion" Slices.
 */
const AccordionSlice: FC<AccordionSliceProps> = ({ slice }) => {
  return (
    <Section
      head={{
        title: slice.primary.title,
        text: slice.primary.text,
      }}
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <Accordion type={slice.primary.type}>
        {slice.primary.items.map((item, index) => (
          <AccordionItem key={index} value={index.toString()}>
            <AccordionTrigger>{item.title}</AccordionTrigger>
            <AccordionContent>
              <PrismicRichText field={item.content} />
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </Section>
  );
};

export default AccordionSlice;

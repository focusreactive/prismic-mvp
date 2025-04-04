import { FC } from "react";
import { Content } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import { Section } from "@/components/ui/section";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { PrismicNextLink } from "@prismicio/next";
import { Button } from "@/components/ui/button";

/**
 * Props for `Carousel`.
 */
export type CarouselProps = SliceComponentProps<Content.CarouselSlice>;

/**
 * Component for "Carousel" Slices.
 */
const CarouselSlice: FC<CarouselProps> = ({ slice }) => {
  return (
    <Section
      head={{
        title: slice.primary.title,
        text: slice.primary.text,
      }}
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <Carousel>
        <CarouselPrevious />

        <CarouselContent>
          {slice.primary.items.map((item, index) => (
            <CarouselItem key={index} className={"basis-[45%] pb-2"}>
              <Card className={"h-full"}>
                <CardHeader>
                  <CardTitle>
                    <h3>{item.title}</h3>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <PrismicRichText field={item.content} />
                </CardContent>
                <CardFooter className={"mt-auto"}>
                  <Button asChild={true}>
                    <PrismicNextLink field={item.link} />
                  </Button>
                </CardFooter>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>

        <CarouselNext />
      </Carousel>
    </Section>
  );
};

export default CarouselSlice;

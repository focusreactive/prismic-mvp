import { Content } from "@prismicio/client";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { PrismicNextLink } from "@prismicio/next";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { AccessibleIcon } from "radix-ui";
import { SiteLogo } from "@/components/SiteLogo";

export function Header({ data }: { data: Content.HeaderDocument["data"] }) {
  return (
    <header className={"mx-auto mt-4 max-w-200"}>
      <NavigationMenu
        className={"flex h-13 w-full items-center justify-between"}
      >
        <Link href="https://focusreactive.com/">
          <AccessibleIcon.Root label={"Home"}>
            <SiteLogo className={"h-auto w-24"} />
          </AccessibleIcon.Root>
        </Link>

        <NavigationMenuList>
          {data.menu.map((item, index) => (
            <NavigationMenuItem key={index}>
              <NavigationMenuLink asChild={true}>
                <PrismicNextLink field={item.link} />
              </NavigationMenuLink>
            </NavigationMenuItem>
          ))}
        </NavigationMenuList>

        <NavigationMenuList>
          {data.actions.map((item, index) => (
            <NavigationMenuItem key={index}>
              <NavigationMenuLink asChild={true}>
                <Button asChild={true} variant={"outline"}>
                  <PrismicNextLink field={item.link} />
                </Button>
              </NavigationMenuLink>
            </NavigationMenuItem>
          ))}
        </NavigationMenuList>
      </NavigationMenu>
    </header>
  );
}

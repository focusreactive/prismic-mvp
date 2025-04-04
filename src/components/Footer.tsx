import { Content } from "@prismicio/client";
import { PrismicNextLink } from "@prismicio/next";
import { PrismicRichText } from "@prismicio/react";
import { SiteLogo } from "@/components/SiteLogo";
import Link from "next/link";
import { AccessibleIcon } from "radix-ui";

export function Footer({ data }: { data: Content.FooterDocument["data"] }) {
  return (
    <footer className="mx-auto mt-16 mb-8 flex max-w-200 gap-10 border-t border-gray-200 pt-8">
      <div className="mt-8 text-sm text-gray-500">
        <Link href="https://focusreactive.com/">
          <AccessibleIcon.Root label={"Home"}>
            <SiteLogo className={"mb-4 h-auto w-24"} />
          </AccessibleIcon.Root>
        </Link>
        <PrismicRichText field={data.copyright} />
      </div>

      <div className="ml-auto flex gap-12">
        {data.menu.map((menuGroup, groupIndex) => (
          <div key={groupIndex} className="flex flex-col gap-2">
            <h3 className="text-lg font-medium">{menuGroup.title}</h3>
            <ul className="flex flex-col gap-2">
              {menuGroup.link.map((link, linkIndex) => (
                <li key={linkIndex}>
                  <PrismicNextLink
                    field={link}
                    className="text-sm text-gray-600 hover:text-gray-900"
                  />
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </footer>
  );
}

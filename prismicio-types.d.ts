// Code generated by Slice Machine. DO NOT EDIT.

import type * as prismic from "@prismicio/client";

type Simplify<T> = { [KeyType in keyof T]: T[KeyType] };

/**
 * Item in *Header → Menu*
 */
export interface HeaderDocumentDataMenuItem {
  /**
   * Link field in *Header → Menu*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: header.menu[].link
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  link: prismic.LinkField<string, string, unknown, prismic.FieldState, never>;
}

/**
 * Item in *Header → Buttons*
 */
export interface HeaderDocumentDataActionsItem {
  /**
   * Link field in *Header → Buttons*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: header.actions[].link
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  link: prismic.LinkField<string, string, unknown, prismic.FieldState, never>;
}

type HeaderDocumentDataSlicesSlice = never;

/**
 * Content for Header documents
 */
interface HeaderDocumentData {
  /**
   * Menu field in *Header*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: header.menu[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#group
   */
  menu: prismic.GroupField<Simplify<HeaderDocumentDataMenuItem>>;

  /**
   * Buttons field in *Header*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: header.actions[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#group
   */
  actions: prismic.GroupField<Simplify<HeaderDocumentDataActionsItem>>;

  /**
   * Slice Zone field in *Header*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: header.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#slices
   */
  slices: prismic.SliceZone<HeaderDocumentDataSlicesSlice>;
}

/**
 * Header document from Prismic
 *
 * - **API ID**: `header`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type HeaderDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithoutUID<
    Simplify<HeaderDocumentData>,
    "header",
    Lang
  >;

type PageDocumentDataSlicesSlice =
  | CarouselSlice
  | TableSlice
  | AccordionSlice
  | RichTextSlice;

/**
 * Content for Page documents
 */
interface PageDocumentData {
  /**
   * Title field in *Page*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: page.title
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  title: prismic.KeyTextField;

  /**
   * Header field in *Page*
   *
   * - **Field Type**: Content Relationship
   * - **Placeholder**: *None*
   * - **API ID Path**: page.header
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  header: prismic.ContentRelationshipField<"header">;

  /**
   * Slice Zone field in *Page*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: page.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#slices
   */
  slices: prismic.SliceZone<PageDocumentDataSlicesSlice> /**
   * Meta Title field in *Page*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A title of the page used for social media and search engines
   * - **API ID Path**: page.meta_title
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */;
  meta_title: prismic.KeyTextField;

  /**
   * Meta Description field in *Page*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A brief summary of the page
   * - **API ID Path**: page.meta_description
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  meta_description: prismic.KeyTextField;

  /**
   * Meta Image field in *Page*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: page.meta_image
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  meta_image: prismic.ImageField<never>;
}

/**
 * Page document from Prismic
 *
 * - **API ID**: `page`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type PageDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithUID<Simplify<PageDocumentData>, "page", Lang>;

export type AllDocumentTypes = HeaderDocument | PageDocument;

/**
 * Item in *Accordion → Default → Primary → Items*
 */
export interface AccordionSliceDefaultPrimaryItemsItem {
  /**
   * Title field in *Accordion → Default → Primary → Items*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: accordion.default.primary.items[].title
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  title: prismic.KeyTextField;

  /**
   * Content field in *Accordion → Default → Primary → Items*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: accordion.default.primary.items[].content
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  content: prismic.RichTextField;
}

/**
 * Primary content in *Accordion → Default → Primary*
 */
export interface AccordionSliceDefaultPrimary {
  /**
   * Type field in *Accordion → Default → Primary*
   *
   * - **Field Type**: Select
   * - **Placeholder**: *None*
   * - **Default Value**: single
   * - **API ID Path**: accordion.default.primary.type
   * - **Documentation**: https://prismic.io/docs/field#select
   */
  type: prismic.SelectField<"single" | "multiple", "filled">;

  /**
   * Title field in *Accordion → Default → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: accordion.default.primary.title
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  title: prismic.KeyTextField;

  /**
   * Text field in *Accordion → Default → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: accordion.default.primary.text
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  text: prismic.RichTextField;

  /**
   * Items field in *Accordion → Default → Primary*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: accordion.default.primary.items[]
   * - **Documentation**: https://prismic.io/docs/field#group
   */
  items: prismic.GroupField<Simplify<AccordionSliceDefaultPrimaryItemsItem>>;
}

/**
 * Default variation for Accordion Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type AccordionSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<AccordionSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *Accordion*
 */
type AccordionSliceVariation = AccordionSliceDefault;

/**
 * Accordion Shared Slice
 *
 * - **API ID**: `accordion`
 * - **Description**: Accordion
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type AccordionSlice = prismic.SharedSlice<
  "accordion",
  AccordionSliceVariation
>;

/**
 * Item in *Carousel → Default → Primary → Items*
 */
export interface CarouselSliceDefaultPrimaryItemsItem {
  /**
   * Title field in *Carousel → Default → Primary → Items*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: carousel.default.primary.items[].title
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  title: prismic.KeyTextField;

  /**
   * Content field in *Carousel → Default → Primary → Items*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: carousel.default.primary.items[].content
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  content: prismic.RichTextField;

  /**
   * Link field in *Carousel → Default → Primary → Items*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: carousel.default.primary.items[].link
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  link: prismic.LinkField<string, string, unknown, prismic.FieldState, never>;
}

/**
 * Primary content in *Carousel → Default → Primary*
 */
export interface CarouselSliceDefaultPrimary {
  /**
   * Title field in *Carousel → Default → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: carousel.default.primary.title
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  title: prismic.KeyTextField;

  /**
   * Text field in *Carousel → Default → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: carousel.default.primary.text
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  text: prismic.RichTextField;

  /**
   * Items field in *Carousel → Default → Primary*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: carousel.default.primary.items[]
   * - **Documentation**: https://prismic.io/docs/field#group
   */
  items: prismic.GroupField<Simplify<CarouselSliceDefaultPrimaryItemsItem>>;
}

/**
 * Default variation for Carousel Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type CarouselSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<CarouselSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *Carousel*
 */
type CarouselSliceVariation = CarouselSliceDefault;

/**
 * Carousel Shared Slice
 *
 * - **API ID**: `carousel`
 * - **Description**: Carousel
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type CarouselSlice = prismic.SharedSlice<
  "carousel",
  CarouselSliceVariation
>;

/**
 * Primary content in *RichText → Default → Primary*
 */
export interface RichTextSliceDefaultPrimary {
  /**
   * Content field in *RichText → Default → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: Lorem ipsum...
   * - **API ID Path**: rich_text.default.primary.content
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  content: prismic.RichTextField;
}

/**
 * Default variation for RichText Slice
 *
 * - **API ID**: `default`
 * - **Description**: RichText
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type RichTextSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<RichTextSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *RichText*
 */
type RichTextSliceVariation = RichTextSliceDefault;

/**
 * RichText Shared Slice
 *
 * - **API ID**: `rich_text`
 * - **Description**: RichText
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type RichTextSlice = prismic.SharedSlice<
  "rich_text",
  RichTextSliceVariation
>;

/**
 * Primary content in *Table → Default → Primary*
 */
export interface TableSliceDefaultPrimary {
  /**
   * Title field in *Table → Default → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: table.default.primary.title
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  title: prismic.KeyTextField;

  /**
   * Text field in *Table → Default → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: table.default.primary.text
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  text: prismic.RichTextField;

  /**
   * Table field in *Table → Default → Primary*
   *
   * - **Field Type**: Table
   * - **Placeholder**: *None*
   * - **API ID Path**: table.default.primary.table
   * - **Documentation**: https://prismic.io/docs/field#table
   */
  table: prismic.TableField;

  /**
   * Mode field in *Table → Default → Primary*
   *
   * - **Field Type**: Select
   * - **Placeholder**: *None*
   * - **Default Value**: wrap
   * - **API ID Path**: table.default.primary.mode
   * - **Documentation**: https://prismic.io/docs/field#select
   */
  mode: prismic.SelectField<"wrap" | "nowrap", "filled">;
}

/**
 * Default variation for Table Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type TableSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<TableSliceDefaultPrimary>,
  never
>;

/**
 * Primary content in *Table → Nowrap → Primary*
 */
export interface TableSliceNowrapPrimary {
  /**
   * Title field in *Table → Nowrap → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: table.nowrap.primary.title
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  title: prismic.KeyTextField;

  /**
   * Text field in *Table → Nowrap → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: table.nowrap.primary.text
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  text: prismic.RichTextField;

  /**
   * Table field in *Table → Nowrap → Primary*
   *
   * - **Field Type**: Table
   * - **Placeholder**: *None*
   * - **API ID Path**: table.nowrap.primary.table
   * - **Documentation**: https://prismic.io/docs/field#table
   */
  table: prismic.TableField;

  /**
   * Mode field in *Table → Nowrap → Primary*
   *
   * - **Field Type**: Select
   * - **Placeholder**: *None*
   * - **Default Value**: wrap
   * - **API ID Path**: table.nowrap.primary.mode
   * - **Documentation**: https://prismic.io/docs/field#select
   */
  mode: prismic.SelectField<"wrap" | "nowrap", "filled">;
}

/**
 * Nowrap variation for Table Slice
 *
 * - **API ID**: `nowrap`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type TableSliceNowrap = prismic.SharedSliceVariation<
  "nowrap",
  Simplify<TableSliceNowrapPrimary>,
  never
>;

/**
 * Slice variation for *Table*
 */
type TableSliceVariation = TableSliceDefault | TableSliceNowrap;

/**
 * Table Shared Slice
 *
 * - **API ID**: `table`
 * - **Description**: Table
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type TableSlice = prismic.SharedSlice<"table", TableSliceVariation>;

declare module "@prismicio/client" {
  interface CreateClient {
    (
      repositoryNameOrEndpoint: string,
      options?: prismic.ClientConfig,
    ): prismic.Client<AllDocumentTypes>;
  }

  interface CreateWriteClient {
    (
      repositoryNameOrEndpoint: string,
      options: prismic.WriteClientConfig,
    ): prismic.WriteClient<AllDocumentTypes>;
  }

  interface CreateMigration {
    (): prismic.Migration<AllDocumentTypes>;
  }

  namespace Content {
    export type {
      HeaderDocument,
      HeaderDocumentData,
      HeaderDocumentDataMenuItem,
      HeaderDocumentDataActionsItem,
      HeaderDocumentDataSlicesSlice,
      PageDocument,
      PageDocumentData,
      PageDocumentDataSlicesSlice,
      AllDocumentTypes,
      AccordionSlice,
      AccordionSliceDefaultPrimaryItemsItem,
      AccordionSliceDefaultPrimary,
      AccordionSliceVariation,
      AccordionSliceDefault,
      CarouselSlice,
      CarouselSliceDefaultPrimaryItemsItem,
      CarouselSliceDefaultPrimary,
      CarouselSliceVariation,
      CarouselSliceDefault,
      RichTextSlice,
      RichTextSliceDefaultPrimary,
      RichTextSliceVariation,
      RichTextSliceDefault,
      TableSlice,
      TableSliceDefaultPrimary,
      TableSliceNowrapPrimary,
      TableSliceVariation,
      TableSliceDefault,
      TableSliceNowrap,
    };
  }
}

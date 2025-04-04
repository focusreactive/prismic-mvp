# Prismic + Next.js MVP

This is a modern web application built with Next.js and Prismic CMS, featuring a component-based architecture with shadcn/ui, Radix UI primitives, and styled with Tailwind CSS.

- **Tech Stack**: Next.js, Prismic CMS, TypeScript, Tailwind CSS, shadcn/ui, Radix UI
- **Demo**: [Open live demo][live-demo]
- **Prismic Documentation**: [Prismic Next.js Documentation][prismic-docs]

## 🛠️ Project Overview

This project is a modern website built with:

- **[Next.js 15](https://nextjs.org/)**: React framework with App Router and Server Components
- **[Prismic CMS](https://prismic.io/)**: Headless CMS for content management
- **[TypeScript](https://www.typescriptlang.org/)**: Type-safe JavaScript
- **[Tailwind CSS](https://tailwindcss.com/)**: Utility-first CSS framework
- **[shadcn/ui](https://ui.shadcn.com/)**: Re-usable UI components
- **[Radix UI](https://www.radix-ui.com/)**: Unstyled, accessible UI primitives
- **[Embla Carousel](https://www.embla-carousel.com/)**: Carousel component used for sliders

## 🚀 Getting Started

### Prerequisites

- Node.js 18.17.0 or later
- npm or yarn or pnpm

### Installation

```sh
# Clone the repository
git clone <repository-url>
cd prismic-mvp-fr

# Install dependencies
npm install
```

### Available Scripts

```sh
# Development
npm run dev         # Run both Next.js and Slice Machine concurrently
npm run next:dev    # Run Next.js development server with turbopack
npm run slicemachine # Run Slice Machine for Prismic content modeling

# Build and Production
npm run build       # Build the Next.js application
npm run start       # Start the production server

# Code Quality
npm run lint        # Run ESLint to check code quality
npm run check-types # Run TypeScript type checking
npm run format      # Format code with Prettier
```

## 📋 Project Structure

- `/src/app/`: Next.js App Router pages and layouts
- `/src/components/`: Reusable React components
  - `/src/components/ui/`: shadcn/ui components built on Radix UI
- `/src/slices/`: Prismic slice components
- `/customtypes/`: Prismic custom type definitions
- `/src/lib/`: Utility functions and helpers
- `/src/prismicio.ts`: Prismic client configuration

## 🧩 Features

- **Header and Footer Components**: Consistent header and footer across all pages
- **Slice Components**:
  - Accordion: Collapsible content sections
  - Carousel: Image and content slider
  - RichText: Rich text content blocks
  - Table: Structured data display
- **Dynamic Pages**: Route-based dynamic page rendering from Prismic
- **UI Components Library**: shadcn/ui components with Tailwind styling
- **TypeScript Integration**: Full type safety with Prismic types

## 🔄 Content Management

### Create a page

To create a page, go to [prismic.io/dashboard](https://prismic.io/dashboard), click on the repository for this website, and select **Page**.

Pages are made of Slices. You can add and rearrange Slices to your pages.

Your new page will be accessible by its URL, but it won't appear on the website automatically. To let users discover it, add it to the navigation.

### Preview documents

If you chose this starter when you created a new repository from the Prismic Dashboard, then your repository is preconfigured with previews on localhost. To change the preview configuration or add previews to your production or staging environments, see [Preview Drafts in Next.js](https://prismic.io/docs/technologies/preview-content-nextjs) in the Prismic documentation.

### Edit the code

There are two steps to rendering content from Prismic in your Next.js project:

1. Fetch content from the Prismic API using `@prismicio/client`.
2. Template the content using components from `@prismicio/react`.

Here are some of the files in your project that you can edit:

- `prismicio.ts` - This file includes configuration for `@prismicio/client` and exports useful API helpers.
- `app/layout.tsx` - This is your layout component, which includes configuration for `@prismicio/react` and `@prismicio/next`.
- `app/page.tsx` - This is the app homepage. It queries and renders a page document with the UID (unique identifier) "home" from the Prismic API.
- `app/[uid]/page.tsx` - This is the page component, which queries and renders a page document from your Prismic repository based on the UID.
- `slices/*/index.tsx` - Each Slice in your project has an index.tsx file that renders the Slice component. Edit this file to customize your Slices.

These are important files that you should leave as-is:

- `app/api/exit-preview/route.ts` - Do not edit or delete this file. This is the API endpoint to close a Prismic preview session.
- `app/api/preview/route.ts` - Do not edit or delete this file. This is the API endpoint to launch a Prismic preview session.
- `app/slice-simulator/page.tsx` - Do not edit or delete this file. This file simulates your Slice components in development.
- `slices/` - This directory contains Slice components, which are generated programmatically by Slice Machine. To customize a Slice template, you can edit the Slice's index.tsx file. To add Slices, delete Slices, or edit Slice models, use Slice Machine (more info below).

Learn more about how to edit your components with [Fetch Data in Next.js](https://prismic.io/docs/technologies/fetch-data-nextjs) and [Template Content in Next.js](https://prismic.io/docs/technologies/template-content-nextjs).

Learn more about how to use [TypeScript with Prismic](https://prismic.io/docs/typescript-nextjs).

### Deploy to the web

This project is deployed on Vercel at [https://prismic-mvp.vercel.app/](https://prismic-mvp.vercel.app/) and automatically deploys on push to the main branch.

### Edit content models with Slice Machine

This project includes an application called Slice Machine, which generates models for your Custom Types and Slices. Slice Machine stores the models locally in your codebase, so you can save and version them. It also syncs your models to Prismic. To learn how to use Slice Machine, read [Model Content in Next.js](https://prismic.io/docs/technologies/model-content-nextjs).

If you change or add to your Custom Types, you'll need to update your route handling to match. To learn how to do that, read [Define Paths in Next.js](https://prismic.io/docs/technologies/define-paths-nextjs).

## 📚 Documentation

For the official Prismic documentation, see [Prismic's guide for Next.js][prismic-docs] or the [technical references for the installed Prismic packages](https://prismic.io/docs/technologies/technical-references).

## 📄 License

```
Copyright 2013-2022 Prismic <contact@prismic.io> (https://prismic.io)

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
```

[prismic]: https://prismic.io/
[prismic-docs]: https://prismic.io/docs/technologies/nextjs
[prismic-sign-up]: https://prismic.io/dashboard/signup
[nextjs]: https://nextjs.org/
[live-demo]: https://nextjs-starter-prismic-minimal.vercel.app/

## Credits

This project was created at **FocusReactive** - the expert consultancy for the modern web. We specialize in helping clients beat the competition and accelerate business growth. With a deep expertise in headless CMS, NextJS, and eCommerce, we deliver cutting-edge solutions that prioritize your business goals.

### Our Expertise

- **Content-Centric Websites**: We have a deep experience building extendable, SEO optimized content and marketing websites with advanced CMS integrations and analytics.
- **Headless eCommerce**: Our next-generation, content-rich, and performant online eCommerce websites come with end-to-end integrations to power your digital business.
- **Headless CMS Consulting**: We offer multi-channel CMS development, modeling, customization, and support to help you manage your content seamlessly across various platforms.
- **Web Performance**: Our experts can audit, transform the architecture, and optimize your website to meet the 100 SCORE Core Web Vitals for exceptional web performance.

If you're looking for expertise in headless CMS, NextJS, or eCommerce, get in touch with **FocusReactive** today. Visit our website at [focusreactive.com](https://focusreactive.com/) to learn more about how we can help you accelerate your business growth.

<image src="https://github.com/focusreactive/MVP-NextJS13-New-Features/assets/14885189/7c67e385-3f79-43e3-ba27-bada1ebddf03" width="500px"/>

---

_This project is licensed under the MIT License. © 2023 FocusReactive._

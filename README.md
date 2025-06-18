# Futuristic Blog

A next-gen, sci-fi inspired blog platform built with Next.js 14, Tailwind CSS, and framer-motion. Anyone can post blogs (no authentication), with Markdown support, glassmorphism, neon glows, and animated UI.

## Features
- Public blog feed with cards (title, summary, date, author)
- Post Blog page with Markdown editor + preview
- Markdown rendering (react-markdown/next-mdx-remote)
- Animated UI (framer-motion)
- In-memory/local JSON storage (no DB required)
- Dark, futuristic theme (Orbitron, Syne, Rajdhani fonts)
- Vercel analytics, SEO, Open Graph
- Responsive, glassy, glowing, animated design

## Getting Started

First, run the development server:

```bash
npm install
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## Folder Structure
- `/src/components` — UI components
- `/src/app` — Next.js app directory
- `/src/utils` — Utility functions (blog storage, etc)
- `/src/styles` — Custom CSS (animated backgrounds, etc)

## Deploy
Ready for Vercel. Just push and deploy!

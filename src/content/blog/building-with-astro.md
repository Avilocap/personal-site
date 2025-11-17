---
title: "Building with Astro: My Experience"
date: "2024-10-15"
summary: "Exploring Astro as a framework for building content-focused websites. Here's what I learned."
cover:
  src: "/img/background.png"
  alt: "Astro Framework"
tags: ["astro", "web development", "javascript"]
draft: false
---

I recently rebuilt my personal website using [Astro](https://astro.build), and I wanted to share my experience with this framework.

## Why Astro?

Astro is a modern web framework that focuses on:

- **Performance**: Ships zero JavaScript by default
- **Content-first**: Perfect for blogs and portfolios
- **Flexibility**: Works with React, Vue, Svelte, and more
- **Developer Experience**: Amazing DX with fast builds

## Content Collections

One of my favorite features is Content Collections. They provide:

1. Type-safe frontmatter
2. Automatic validation with Zod
3. Built-in content querying
4. Great developer experience

Here's an example of defining a collection:

```typescript
const blog = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    date: z.string(),
    summary: z.string().optional(),
  }),
});
```

## Final Thoughts

Astro has been a joy to work with. If you're building a content-focused site, I highly recommend giving it a try.

The combination of performance, developer experience, and flexibility makes it an excellent choice for personal sites, blogs, and portfolios.



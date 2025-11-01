import { defineCollection, z } from "astro:content";

const projects = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    summary: z.string().optional(),
    date: z.string().optional(),
    tags: z.array(z.string()).optional(),
    cover: z
      .object({
        src: z.string(),
        alt: z.string().optional(),
      })
      .optional(),
    images: z
      .array(
        z.object({
          src: z.string(),
          alt: z.string().optional(),
          caption: z.string().optional(),
        })
      )
      .optional(),
    links: z
      .object({
        site: z.string().url().optional(),
        repo: z.string().url().optional(),
      })
      .optional(),
    draft: z.boolean().default(false),
  }),
});

export const collections = { projects };


import { defineCollection, z } from "astro:content";

export const collections = {
  work: defineCollection({
    schema: ({ image }) =>
      z.object({
        order: z.string(),
        title: z.string(),
        client: z.string(),
        type: z.string(),
        tools: z.string(),
        website: z.string().optional(),
        link: z.string().optional(),
        description: z.string().optional(),
        cover: z.object({
          src: image().refine((img) => img.width >= 300, {
            message: "Cover image must be at least 430 pixels wide!",
          }),
          alt: z.string(),
        }),
        images: z.array(
          z.object({
            src: image().refine((img) => img.width >= 300, {
              message: "Image must be at least 300 pixels wide!",
            }),
            alt: z.string(),
            class: z.string().optional(),
          })
        ),
        url: z.object({
          prev: z.string().optional(),
          next: z.string().optional(),
        }),
      }),
  }),
};

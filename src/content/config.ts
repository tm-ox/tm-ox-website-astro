import { defineCollection, z } from "astro:content";

export const collections = {
  pages: defineCollection({
    schema: ({ image }) =>
      z.object({
        title: z.string(),
        description: z.string(),
        website: z.string().optional(),
        sections: z.array(z.string()), 
        tools: z.array(
          z.object({
            icon: image().refine((img) => img.width >= 100, {
              message: "Image must be at least 100 pixels wide!",
            }).optional(),
            name: z.string(),
            link: z.string().optional(),
          })
        ), 
      }),
  }),

  work: defineCollection({
    schema: ({ image }) =>
      z.object({
        order: z.string(),
        title: z.string(),
        client: z.string(),
        website: z.string().optional(),
        link: z.string().optional(),
        type: z.string(),
        tools: z.array(
          z.object({
            icon: image().refine((img) => img.width >= 100, {
              message: "Image must be at least 100 pixels wide!",
            }).optional(),
            name: z.string(),
            link: z.string().optional(),
          })
        ), 
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

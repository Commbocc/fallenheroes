import { defineContentConfig, defineCollection } from "@nuxt/content";
import { z } from "zod";

export default defineContentConfig({
  collections: {
    content: defineCollection({
      type: "page",
      source: "**",
      schema: z.object({
        //
      }),
    }),
    memorials: defineCollection({
      type: "page",
      source: "memorials/*.md",
      schema: z.object({
        ext_link: z.string().optional(),
      }),
    }),
    fallen: defineCollection({
      type: "page",
      source: "memorials/*/*.md",
      schema: z.object({
        name: z.string(),
        category: z.string(),
        dob: z.string().optional(),
        date: z.string(),
        circa: z.boolean().default(false),
        image: z.string().optional(),
        // images: z.array(z.string()).optional(),
      }),
    }),
  },
});

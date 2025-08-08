import { defineCollection, z } from "astro:content";

const projectsCollection = defineCollection({
    type: "content",
    schema: z.object({
        title: z.string(),
        summary: z.string(),
        tech: z.array(z.string()),
        image: z.string().optional(),
        url: z.string().url().optional(),
        repo: z.string().url().optional(),
        featured: z.boolean().default(false),
    }),
});

export const collections = {
    projects: projectsCollection,
};

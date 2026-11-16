import { defineCollection } from "astro/content/config";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const gamedevs = defineCollection({
    loader: glob({ pattern: '*.md', base: './src/content/gamedevs' }),
    schema: z.object({
        name: z.string(),
        websiteURL: z.url(),
        role: z.string().optional(),
        isArtist: z.boolean().default(false),
        isEngineer: z.boolean().default(false),
        isDesigner: z.boolean().default(false),
    })
}
)

export const collections = { gamedevs }
import { defineCollection } from "astro/content/config";
import { glob } from "astro/loaders";
import { z } from "astro/zod";
import { roles } from "./globals";

const gamedevs = defineCollection({
    loader: glob({ pattern: '*.md', base: './src/content/gamedevs' }),
    schema: z.object({
        name: z.string(),
        websiteURL: z.url(),
        roles: z.array(z.literal(roles)),
        customTitle: z.string().optional(),
    })
}
)

export const collections = { gamedevs }
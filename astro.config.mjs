// @ts-check
import { defineConfig, fontProviders } from 'astro/config';

// https://astro.build/config
export default defineConfig({
    fonts: [{
        provider: fontProviders.fontsource(),
        name: "Crimson Text",
        cssVariable: "--font-crimson",
        styles: ["normal", "italic"],
        weights: [600, 400]
    }]
});

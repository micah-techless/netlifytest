import { defineConfig } from 'astro/config';
import netlify from "@astrojs/netlify";


export default defineConfig({
    site: "https://netlify-blobs-test-wpii-312.netlify.app/",
    adapter: netlify()
});

import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import vue from '@astrojs/vue';
import ElementPlus from 'unplugin-element-plus/vite'
// https://astro.build/config
export default defineConfig({
    vite: {
        plugins: [
            ElementPlus(),
        ],

        ssr: {
            noExternal: ['element-plus'],
        }

    },
    integrations: [react(),vue()],
});

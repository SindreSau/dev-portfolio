import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'astro/config';

import sitemap from '@astrojs/sitemap';

import icon from 'astro-icon';

// https://astro.build/config
export default defineConfig({
    vite: {
        plugins: [tailwindcss()],
    },

    i18n: {
        locales: ['en', 'nb'],
        defaultLocale: 'en',
    },

    prefetch: {
        prefetchAll: true,
        defaultStrategy: 'viewport',
    },

    experimental: {
        clientPrerender: true,
    },

    integrations: [sitemap(), icon()],

    site: 'https://www.sindresau.me',

    devToolbar: {
        enabled: false,
    },
});

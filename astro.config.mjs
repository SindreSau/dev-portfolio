import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'astro/config';

import sitemap from '@astrojs/sitemap';

import icon from 'astro-icon';

import react from '@astrojs/react';

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
        defaultStrategy: 'hover',
    },

    experimental: {
        clientPrerender: true,
    },

    integrations: [sitemap(), icon(), react()],

    site: 'https://www.sindresau.me',

    devToolbar: {
        enabled: false,
    },
});

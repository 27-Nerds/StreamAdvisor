import {fileURLToPath} from "url";
import { defineNuxtConfig } from "nuxt/config";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    // @ts-ignore
    ssr: true,
    app: {
        pageTransition: { name: 'page' }
    },
    plugins: [
        {src: './plugins/mask', ssr: false},
        {src: './plugins/kinesis', ssr: false},
        {src: './plugins/apiInstance', ssr: false}
    ],
    modules: ['@nuxtjs/device', 'nuxt-gtag', '@nuxtjs/robots', "@nuxt/image", '@zadigetvoltaire/nuxt-gtm'],
    robots: {
        rules: {
            UserAgent: '*',
            Allow: '/',
            Host: 'https://streamadvisor.com.ua',
            Sitemap: 'https://streamadvisor.com.ua/sitemap.xml'
        }
    },
    gtag: {
        id: 'G-QGFNVYP4FP',
    },
    gtm: {
        id: 'GTM-TRBQMC7'
    }
})

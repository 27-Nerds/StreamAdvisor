import {fileURLToPath} from "url";
import { defineNuxtConfig } from "nuxt/config";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    // @ts-ignore
    plugins: [
        {src: './plugins/mask', ssr: false},
        {src: './plugins/kinesis', ssr: false},
        {src: './plugins/apiInstance', ssr: false}
    ],
    modules: [
        '@nuxtjs/device',
        'nuxt-gtag'
    ],
    gtag: {
        id: 'GTM-TRBQMC7'
    }
})

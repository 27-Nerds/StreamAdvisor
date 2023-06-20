import {fileURLToPath} from "url";
import { defineNuxtConfig } from "nuxt/config";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    // @ts-ignore
    plugins: [
        {src: './plugins/mask', ssr: false}
    ]
})

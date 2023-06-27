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
        'nuxt-gtag',
       [ 'nuxt-mail', {
           message: [
               { name: 'client', to: 'contact@foo.de' },
               { name: 'support', to: 'maxivanov200899@gmail.com' },
           ],
           smtp: {
               host: 'smtp.mailtrap.io',
               port: 2525,
               auth: {
                   user: '85a0a971982c4b',
                   pass: '058a1e937d07fa'
               }
           },
       }]
    ],
    gtag: {
        id: ''
    }
})

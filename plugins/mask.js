import {defineNuxtPlugin} from "nuxt/app";
import VueTheMask from 'vue-the-mask'

export default defineNuxtPlugin((app) => {
    app.vueApp.use(VueTheMask)
})

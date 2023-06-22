import {defineNuxtPlugin} from "nuxt/app";
import pkg from 'vue-kinesis'

export default defineNuxtPlugin((app) => {
    pkg(app.vueApp)
})

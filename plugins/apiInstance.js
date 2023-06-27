import {defineNuxtPlugin} from "nuxt/app";
import axios from "axios";

export default defineNuxtPlugin(({ provide, $config }) => {
    const apiInstance = axios.create({
        timeout: 30000,
    })

    provide('axios', apiInstance)
})

import Vue from 'vue'
import axios from 'axios'

const config = {
    baseURL: 'http://localhost:3001',
}

const $axios = axios.create(config)

Plugin.install = Vue => {
    Vue.axios = $axios
    window.axios = $axios

    Object.defineProperties(Vue.prototype, {
        axios: {
            get() {
                return $axios
            },
        },
        $axios: {
            get() {
                return $axios
            },
        },
    })
}

Vue.use(Plugin)

export default Plugin

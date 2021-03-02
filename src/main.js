import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import './plugins/axios'
import './plugins/toasted'
import './plugins/vee-validate'

Vue.config.productionTip = false

new Vue({
    router,
    vuetify,
    store,
    render: h => h(App),
}).$mount('#app')

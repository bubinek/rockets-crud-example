import Vue from 'vue'
import Toasted from 'vue-toasted'

Vue.use(Toasted, {
    position: 'bottom-left',
    duration: 2500,
    iconPack: 'mdi',
    theme: 'bubble',
    icon: 'check',
})

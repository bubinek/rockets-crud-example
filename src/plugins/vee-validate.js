import Vue from 'vue'
import {extend, setInteractionMode, ValidationObserver, ValidationProvider} from 'vee-validate'
import {required} from 'vee-validate/dist/rules.umd.js'
import timeout from '../components/utils/timeout'

setInteractionMode('lazy')

const asyncValidationRule = async() => {
    await timeout(500)

    return true
}

// install rules
extend('required', required)
extend('async_validation_rule', asyncValidationRule)

// register components
Vue.component('ValidationProvider', ValidationProvider)
Vue.component('ValidationObserver', ValidationObserver)

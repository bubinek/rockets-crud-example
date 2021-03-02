import Vue from 'vue'
import Vuex from 'vuex'
import RocketsList from './rockets/RocketsList'
import RocketsCreate from './rockets/RocketsCreate'
import RocketsEdit from './rockets/RocketsEdit'
import RocketsView from './rockets/RocketsView'

Vue.use(Vuex)

const store = new Vuex.Store({
    modules: {
        RocketsList,
        RocketsCreate,
        RocketsEdit,
        RocketsView,
    }
})

export default store

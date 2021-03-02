import Vue from 'vue'
import VueRouter from 'vue-router'
import RocketsList from '../views/rockets/RocketsList'
import RocketsCreate from '../views/rockets/RocketsCreate'
import RocketsEdit from '../views/rockets/RocketsEdit'
import RocketsView from '../views/rockets/RocketsView'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'RocketsList',
        component: RocketsList,
    },
    {
        path: '/rockets/new',
        name: 'RocketsCreate',
        component: RocketsCreate,
    },
    {
        path: '/rockets/edit/:id',
        name: 'RocketsEdit',
        component: RocketsEdit,
    },
    {
        path: '/rockets/view/:id',
        name: 'RocketsView',
        component: RocketsView,
    },
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes,
})

export default router

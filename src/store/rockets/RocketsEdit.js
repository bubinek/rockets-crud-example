/* global axios */
import {getField, updateField} from 'vuex-map-fields'
import timeout from '../../components/utils/timeout'

export const state = () => ({
    rocket: {},
})

export const mutations = {
    updateField,
}

export const getters = {
    getField,
}

export const actions = {
    async fetchData({commit}, {id}) {
        try {
            await timeout(500)

            const {data} = await axios.get('rockets', {params: {id}})

            commit('updateField', {path: 'rocket', value: data[0]})
        } catch (e) {
            console.error(e)
        }
    },

    async submit({commit}, {rocket}) {
        try {
            await timeout(500)

            const {data} = await axios.put(`rockets/${rocket.id}`, rocket)

            commit('updateField', {path: 'rocket', value: data})
        } catch (e) {
            console.error(e)
        }
    },
}

export default {
    namespaced: true,
    state,
    mutations,
    getters,
    actions,
}

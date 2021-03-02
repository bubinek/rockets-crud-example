/* global axios */
import {getField, updateField} from 'vuex-map-fields'
import timeout from '../../components/utils/timeout'

export const state = () => ({
    rockets: [],
    headers: [
        {
            text: 'Name',
            align: 'start',
            value: 'name',
            sortable: false,
            width: '30%',
        },
        {
            text: 'Height',
            align: 'start',
            value: 'height',
            sortable: false,
            width: '30%',

        },
        {
            text: '',
            align: 'end',
            value: 'actions',
            sortable: false,
            width: '40%',
        },
    ],
})

export const mutations = {
    updateField,
}

export const getters = {
    getField,
}

export const actions = {
    async fetchData({commit}) {
        try {
            await timeout(500)

            const {data} = await axios.get('rockets')

            commit('updateField', {path: 'rockets', value: data})
        } catch (e) {
            console.error(e)
        }
    },

    async deleteItem(store, {id}) {
        try {
            await axios.delete(`rockets/${id}`)

            await actions.fetchData(store)
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

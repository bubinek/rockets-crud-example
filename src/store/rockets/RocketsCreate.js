/* global axios */
import {v1 as uuidv1} from 'uuid'
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
    async fetchData({commit}) {
        try {
            await timeout(500)

            // in real world this data should be returned from backend
            // its really bad practice to construct empty objects on frontend
            const data = {
                id: uuidv1(),
                name: '',
                height: '',
                attr3: '',
                attr4: '',
                attr5: '',
                nestedAttr: {
                    attr6: '',
                    attr7: '',
                    doubleNestedAttr: {
                        attr8: '',
                        attr9: '',
                    },
                },
            }

            commit('updateField', {path: 'rocket', value: data})
        } catch (e) {
            console.error(e)
        }
    },

    async submit({commit}, {rocket}) {
        try {
            await timeout(500)

            const {data} = await axios.post('rockets', rocket)

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

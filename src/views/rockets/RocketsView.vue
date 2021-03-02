<template>
    <v-row justify="center">
        <v-col cols="12" sm="10" md="8" lg="6" xl="4">
            <h1 class="text-h3 py-5 text-center">
                Rocket Detail 🚀
            </h1>

            <template v-if="fetchingData">
                <v-skeleton-loader v-for="n in 9" :key="`skeleton-loader-${n}`" type="list-item" dark />
                <v-skeleton-loader type="actions" dark />
            </template>
            <card-rocket-detail
                v-else
                :rocket="rocket"
                @delete-item="deleteItem"
            />
        </v-col>
    </v-row>
</template>

<script>
    import {createHelpers} from 'vuex-map-fields'
    import CardRocketDetail from '../../components/cards/CardRocketDetail'

    const {mapFields} = createHelpers({
        getterType: 'RocketsView/getField',
        mutationType: 'RocketsView/updateField',
    })

    export default {
        components: {
            CardRocketDetail,
        },

        data() {
            return {
                fetchingData: true,
            }
        },

        computed: {
            ...mapFields([
                'rocket',
            ]),
        },

        methods: {
            async fetchData() {
                await this.$store.dispatch('RocketsView/fetchData', {id: this.$route.params.id})

                this.fetchingData = false
            },

            async deleteItem({id}) {
                this.fetchingData = true

                await this.$store.dispatch('RocketsView/deleteItem', {id})

                this.$router.push({name: 'RocketsList'})

                this.$toasted.success('Rocket was deleted!')
            },
        },

        async mounted() {
            await this.fetchData()
        },
    }
</script>

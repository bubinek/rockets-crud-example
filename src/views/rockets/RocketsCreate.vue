<template>
    <v-row justify="center">
        <v-col cols="12" sm="10" md="8" lg="6" xl="4">
            <h1 class="text-h3 py-5 text-center">
                Rocket Create 🚀
            </h1>

            <template v-if="fetchingData">
                <v-skeleton-loader v-for="n in 9" :key="`skeleton-loader-${n}`" type="list-item" dark />
                <v-skeleton-loader type="actions" dark />
            </template>
            <card-rocket-form
                v-else
                :rocket="rocket"
                @submit="submit"
            />
        </v-col>
    </v-row>
</template>

<script>
    import {createHelpers} from 'vuex-map-fields'
    import CardRocketForm from '../../components/cards/CardRocketForm'

    const {mapFields} = createHelpers({
        getterType: 'RocketsCreate/getField',
        mutationType: 'RocketsCreate/updateField',
    })

    export default {
        components: {
            CardRocketForm,
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
                await this.$store.dispatch('RocketsCreate/fetchData')

                this.fetchingData = false
            },

            async submit({rocket}) {
                await this.$store.dispatch('RocketsCreate/submit', {rocket})

                this.$router.push({name: 'RocketsList'})

                this.$toasted.success('Rocket was created!')
            },
        },

        async mounted() {
            await this.fetchData()
        },
    }
</script>

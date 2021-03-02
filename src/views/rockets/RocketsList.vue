<template>
    <v-row>
        <v-col cols="12">
            <h1 class="text-h3 py-5 text-center">
                Rockets List 🚀
            </h1>

            <v-skeleton-loader v-if="fetchingData" type="table" dark />
            <table-rockets
                v-else
                :headers="headers"
                :items="rockets"
                @delete-item="deleteItem"
            />
        </v-col>
    </v-row>
</template>

<script>
    import {createHelpers} from 'vuex-map-fields'
    import TableRockets from '../../components/tables/TableRockets'

    const {mapFields} = createHelpers({
        getterType: 'RocketsList/getField',
        mutationType: 'RocketsList/updateField',
    })

    export default {
        components: {
            TableRockets,
        },

        data() {
            return {
                fetchingData: true,
            }
        },

        computed: {
            ...mapFields([
                'rockets',
                'headers',
            ]),
        },

        methods: {
            async fetchData() {
                await this.$store.dispatch('RocketsList/fetchData')

                this.fetchingData = false
            },

            async deleteItem({id}) {
                this.fetchingData = true

                await this.$store.dispatch('RocketsList/deleteItem', {id})

                this.fetchingData = false

                this.$toasted.success('Rocket was deleted!')
            },
        },

        async mounted() {
            await this.fetchData()
        },
    }
</script>

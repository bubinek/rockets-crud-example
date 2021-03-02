<template>
    <v-data-table
        :headers="headers"
        :items="items"
        :server-items-length="9999"
        :hide-default-footer="true"
        dark
    >
        <template v-slot:item.actions="{item}">
            <v-btn text :to="{name: 'RocketsView', params: {id: item.id}}">
                <v-icon v-text="'mdi-magnify-plus-outline'" />
            </v-btn>

            <v-btn text :to="{name: 'RocketsEdit', params: {id: item.id}}">
                <v-icon v-text="'mdi-pencil-outline'" />
            </v-btn>

            <v-btn text @click="deleteItem({id: item.id})">
                <v-icon v-text="'mdi-delete-outline'" />
            </v-btn>
        </template>
    </v-data-table>
</template>

<script>
    export default {
        props: {
            headers: {
                type: Array,
                required: true,
            },

            items: {
                type: Array,
                required: true,
            },
        },

        methods: {
            deleteItem({id}) {
                this.$emit('delete-item', {id})
            },
        },
    }
</script>

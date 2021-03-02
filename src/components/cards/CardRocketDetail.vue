<template>
    <v-card dark>
        <v-card-text>
            <list-rocket :rocket="rocket" />
        </v-card-text>

        <v-card-actions>
            <v-btn text exact :to="{name: 'RocketsList'}">
                <v-icon v-text="'mdi-arrow-left'" class="mr-3" />
                Back
            </v-btn>

            <v-spacer />

            <v-btn text exact :to="{name: 'RocketsEdit', params: {id: $route.params.id}}">
                <v-icon v-text="'mdi-pencil-outline'" class="mr-3" />
                Edit
            </v-btn>

            <v-btn text @click="deleteItem">
                <v-icon v-text="'mdi-delete-outline'" class="mr-3" />
                Delete
            </v-btn>
        </v-card-actions>
    </v-card>
</template>

<script>
    import ListRocket from '../lists/ListRocket'

    export default {
        components: {
            ListRocket,
        },

        props: {
            rocket: {
                type: Object,
                required: true,
            },
        },

        methods: {
            deleteItem() {
                this.$emit('delete-item', {id: this.rocket.id})
            },
        },
    }
</script>

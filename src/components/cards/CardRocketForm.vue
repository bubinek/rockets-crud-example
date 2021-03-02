<template>
    <v-card dark>
        <v-card-text>
            <form-rocket ref="formRocket" :value="rocket" @submit="submit" />
        </v-card-text>

        <v-card-actions>
            <v-btn text @click="cancel">
                <v-icon v-text="'mdi-close'" class="mr-3" />
                Cancel
            </v-btn>

            <v-spacer />

            <v-btn text :loading="loading" @click="save">
                <v-icon v-text="'mdi-check'" class="mr-3" />
                Save
            </v-btn>
        </v-card-actions>
    </v-card>
</template>

<script>
    import FormRocket from '../forms/FormRocket'

    export default {
        components: {
            FormRocket,
        },

        props: {
            rocket: {
                type: Object,
                required: true,
            },
        },

        data() {
            return {
                loading: false,
            }
        },

        methods: {
            cancel() {
                this.$router.go(-1)
            },

            async save() {
                this.loading = true

                const isFormValid = await this.$refs.formRocket.submit()

                if (!isFormValid) {
                    this.loading = false
                }
            },

            submit({rocket}) {
                this.$emit('submit', {rocket})
            },
        },
    }
</script>

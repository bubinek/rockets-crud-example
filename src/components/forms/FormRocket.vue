<template>
    <validation-observer ref="validationObserver" slim>
        <v-form>
            <validation-provider
                v-slot="{errors}"
                rules="required"
                vid="name"
                name="name"
            >
                <v-text-field
                    ref="rocketName"
                    label="rocket.name"
                    v-model="rocket.name"
                    :error-messages="errors"
                />
            </validation-provider>

            <validation-provider
                v-slot="{errors}"
                rules="required|async_validation_rule"
                vid="rocket.height"
                name="rocket.height"
            >
                <v-text-field
                    label="rocket.height"
                    v-model="rocket.height"
                    :error-messages="errors"
                />
            </validation-provider>

            <v-text-field
                label="rocket.attr3"
                v-model="rocket.attr3"
            />

            <v-text-field
                label="rocket.attr4"
                v-model="rocket.attr4"
            />

            <v-text-field
                label="rocket.attr5"
                v-model="rocket.attr5"
            />

            <v-text-field
                label="rocket.nestedAttr.attr6"
                v-model="rocket.nestedAttr.attr6"
            />

            <v-text-field
                label="rocket.nestedAttr.attr7"
                v-model="rocket.nestedAttr.attr7"
            />

            <v-text-field
                label="rocket.nestedAttr.doubleNestedAttr.attr8"
                v-model="rocket.nestedAttr.doubleNestedAttr.attr8"
            />

            <v-text-field
                label="rocket.nestedAttr.doubleNestedAttr.attr9"
                v-model="rocket.nestedAttr.doubleNestedAttr.attr9"
            />
        </v-form>
    </validation-observer>
</template>

<script>
    export default {
        props: {
            value: {
                type: Object,
                required: true,
            },
        },

        data() {
            return {
                // create mutable value
                // shallow clone = Object.assign({}, this.value)
                // deep clone = JSON.parse(JSON.stringify(this.value))
                rocket: JSON.parse(JSON.stringify(this.value)),
            }
        },

        watch: {
            // watch for external changes and update mutable value if necessary
            value(value) {
                this.rocket = JSON.parse(JSON.stringify(value))
            },
        },

        methods: {
            async submit() {
                const isFormValid = await this.$refs.validationObserver.validate()

                if (!isFormValid) {
                    return false
                }

                this.$emit('submit', {rocket: this.rocket})

                return true
            },
        },

        async mounted() {
            // hey i can be awaited, screw those pesky callbacks!
            await this.$nextTick()

            // focus name field on load
            this.$refs.rocketName.$refs.input.focus()
        },
    }
</script>

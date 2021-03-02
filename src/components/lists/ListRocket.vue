<template>
    <v-list>
        <v-list-item>
            <v-list-item-content class="justify-center">
                rocket.name
            </v-list-item-content>
            <v-list-item-content class="justify-center">
                {{ rocket.name }}
            </v-list-item-content>
        </v-list-item>

        <v-list-item>
            <v-list-item-content class="justify-center">
                rocket.height
            </v-list-item-content>
            <v-list-item-content class="justify-center">
                {{ rocket.height }}
            </v-list-item-content>
        </v-list-item>

        <v-list-item>
            <v-list-item-content class="justify-center">
                rocket.attr3
            </v-list-item-content>
            <v-list-item-content class="justify-center">
                {{ rocket.attr3 }}
            </v-list-item-content>
        </v-list-item>

        <v-list-item>
            <v-list-item-content class="justify-center">
                rocket.attr4
            </v-list-item-content>
            <v-list-item-content class="justify-center">
                {{ rocket.attr4 }}
            </v-list-item-content>
        </v-list-item>

        <v-list-item>
            <v-list-item-content class="justify-center">
                rocket.attr5
            </v-list-item-content>
            <v-list-item-content class="justify-center">
                {{ rocket.attr5 }}
            </v-list-item-content>
        </v-list-item>

        <v-list-item>
            <v-list-item-content class="justify-center">
                rocket.nestedAttr.attr6
            </v-list-item-content>
            <v-list-item-content class="justify-center">
                {{ rocket.nestedAttr.attr6 }}
            </v-list-item-content>
        </v-list-item>

        <v-list-item>
            <v-list-item-content class="justify-center">
                rocket.nestedAttr.attr7
            </v-list-item-content>
            <v-list-item-content class="justify-center">
                {{ rocket.nestedAttr.attr7 }}
            </v-list-item-content>
        </v-list-item>

        <v-list-item>
            <v-list-item-content class="justify-center">
                rocket.nestedAttr.doubleNestedAttr.attr8
            </v-list-item-content>
            <v-list-item-content class="justify-center">
                {{ rocket.nestedAttr.doubleNestedAttr.attr8 }}
            </v-list-item-content>
        </v-list-item>

        <v-list-item>
            <v-list-item-content class="justify-center">
                rocket.nestedAttr.doubleNestedAttr.attr9
            </v-list-item-content>
            <v-list-item-content class="justify-center">
                {{ rocket.nestedAttr.doubleNestedAttr.attr9 }}
            </v-list-item-content>
        </v-list-item>
    </v-list>
</template>

<script>
    export default {
        props: {
            rocket: {
                type: Object,
                required: true,
            },
        },
    }
</script>

<template>
    <v-app>
        <v-app-bar app color="black" dark>
            <v-btn text exact :to="{name: 'RocketsList'}">
                <v-icon v-text="'mdi-view-list'" class="mr-3" />
                Rockets List
            </v-btn>

            <v-btn text exact :to="{name: 'RocketsCreate'}">
                <v-icon v-text="'mdi-plus'" class="mr-3" />
                Create Rocket
            </v-btn>

            <v-spacer />
        </v-app-bar>

        <v-main>
            <v-container>
                <router-view />
            </v-container>
        </v-main>
    </v-app>
</template>

<style>
    .toasted-container {
        font-family: "Roboto", sans-serif;
        line-height: 1.5;
    }

    .toasted-container > .toasted.bubble {
        font-size: 18px;
    }
</style>

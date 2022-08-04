<template>
  <v-app>
    <v-app-bar color="yellow" elevation="0">
      <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>

      <v-toolbar-title>Title</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn v-for="link in links" :key="link" text>
        {{ link }}
      </v-btn>
      <v-spacer></v-spacer>
      <v-card-title  elevation="0">
        <v-text-field elevation="0"
          v-model="search"
          solo dense  
          append-icon="mdi-magnify"
          label="Search"
          single-line
          hide-details
        ></v-text-field>
      </v-card-title>

      <v-avatar class="mr-2 ml-1" color="grey darken-1" size="32"></v-avatar>
    </v-app-bar>

    <v-navigation-drawer color="yellow" v-model="drawer" absolute temporary>
      <v-list nav dense>
        <v-list-item-group
          v-model="group"
          active-class="black--text text--accent-4"
        >
          <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-home</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Home</v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-account</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Account</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
    <v-carousel class="mt-4"
      cycle
      height="400"
      hide-delimiter-background
      show-arrows-on-hover
    >
      <v-carousel-item v-for="(slide, i) in slides" :key="i">
        <v-sheet :color="colors[i]" height="100%">
          <v-row class="fill-height" align="center" justify="center">
            <div class="text-h2">{{ slide }} Slide</div>
          </v-row>
        </v-sheet>
      </v-carousel-item>
    </v-carousel>
    <v-main class="mt-4">
      <router-view></router-view>
    </v-main>

    <!--  -->
  </v-app>
</template>

<script>
export default {
  data: () => ({
    search: '',
    drawer: false,
    group: null,
    links: ["Dashboard", "Messages", "Profile", "Updates"],
    colors: [
      "yellow",
      "warning",
      "pink darken-2",
      "red lighten-1",
      "deep-purple accent-4",
    ],
    slides: ["First", "Second", "Third", "Fourth", "Fifth"],
  }),
};
</script>

<style></style>

<template>
  <div>
    <v-app-bar color="yellow" elevation="0">
      <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>

      <v-toolbar-title>E-commerce</v-toolbar-title>

      <v-spacer></v-spacer>
      <v-card-title>
        <v-text-field
          solo
          dense
          v-model="search"
          append-icon="mdi-magnify"
          label="Search"
          single-line
          hide-details
        ></v-text-field>
      </v-card-title>

      <v-btn icon class="ml-1 mr-3">
        <v-icon>mdi-cart</v-icon>
      </v-btn>
      <v-btn text>
        Sign in
      </v-btn>
      <v-btn text>
        Login
      </v-btn>
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
  </div>
</template>

<script>
export default {
  name: "Header",
  data: () => ({
    search: '',
    drawer: false,
    group: null,
  }),
};
</script>

<style></style>

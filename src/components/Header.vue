<template>
  <div>
    <v-app-bar
      style="position: fixed; top: 0; z-index: 999; right: 0; left: 0;"
      color="light-blue lighten-4"
      elevation="5"
    >
      <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>

      <v-toolbar-title text
        ><router-link style="text-decoration: none; color:black;" to="/"
          > Shop3</router-link
        ></v-toolbar-title
      >

      <v-spacer></v-spacer>

      <v-badge
        v-if="bagItemscount > 0"
        color="red"
        overlap
        bordered
        :content="bagItemscount"
      >
        <v-btn @click="cartOn = true" icon small elevation="0">
          <v-icon>mdi-cart </v-icon>
        </v-btn>
      </v-badge>
      <v-btn @click="cartOn = true" v-else icon small>
        <v-icon>mdi-cart </v-icon>
      </v-btn>
      <v-btn text class="ml-1">
        Sign in
      </v-btn>
      <v-btn text class="ml-1 p-0">
        Login
      </v-btn>
      <v-avatar class="mr-2 ml-2" color="grey darken-1" size="32"></v-avatar>
    </v-app-bar>

    <v-navigation-drawer
      style="position: fixed; bottom:0;left: 0; z-index: 999;"
      color="light-blue lighten-4"
      v-model="drawer"
      absolute
      temporary
    >
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
    <v-navigation-drawer
      style="position: fixed; bottom:0; right: 0; z-index: 999;"
      color="light-blue lighten-4"
      v-model="cartOn"
      absolute
      right
      temporary
    >
      <v-list nav dense>
        <v-list-item-group
          v-if="bagItemscount > 0"
          v-model="group"
          active-class="black--text text--accent-4"
        >
          <v-list-item v-for="(value, key) in cartItem" :key="key">
            <v-img
              height="50px"
              contain
              max-width="40px"
              :src="value.img"
            ></v-img>

            <v-list-item-title class="ml-4"
              >{{ value.title }} - {{ value.price }}$ x
              {{ value.quantity }}</v-list-item-title
            >
          </v-list-item>
          <v-list-item><router-link class="router-link" to="/cart"
              >
            <v-list-item-title
              >Cart Total : {{ cartTotal }}$</v-list-item-title
            ></router-link>
          </v-list-item>
        </v-list-item-group>
        <v-list-item-group
          v-else
          v-model="group"
          active-class="black--text text--accent-4"
        >
          <v-list-item>
            <router-link class="router-link" to="/cart"
              ><v-list-item-title
                >Cart is Empty</v-list-item-title
              ></router-link
            >
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "Header",
  data: () => ({
    search: "",
    drawer: false,
    cartOn: false,
    group: null,
  }),
  computed: {
    ...mapGetters(["cartTotal"]),
    bagItemscount() {
      return this.$store.getters.itemsNumber;
    },
    cartItem() {
      return this.$store.state.cartItems;
    },
  },
};
</script>

<style scoped>
</style>

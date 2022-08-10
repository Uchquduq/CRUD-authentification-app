<template>
  <div>
    <v-app-bar
      style="position: fixed; top: 0; z-index: 999; right: 0; left: 0;"
      color="blue lighten-3"
      elevation="5"
    >
      <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>

      <v-toolbar-title text
        ><router-link
          style="text-decoration: none; font-size: 14px; font-weight: 500; color:black;"
          to="/"
        >
          <v-img
            height="45px"
            width="90px"
            src="@/assets/logo/kichiklogo.png"
          ></v-img></router-link
      ></v-toolbar-title>

      <v-spacer></v-spacer>

      <v-badge
        v-if="bagItemscount > 0"
        color="red"
        overlap
        bordered
        class="mr-1"
        :content="bagItemscount"
      >
        <v-btn @click="cartOn = true" icon small elevation="0">
          <v-icon>mdi-cart </v-icon>
        </v-btn>
      </v-badge>
      <v-btn @click="cartOn = true" class="mr-1" v-else icon small>
        <v-icon>mdi-cart </v-icon>
      </v-btn>
      <template v-if="isLoggedIn">
        <div class="text-center">
          <v-btn
            @click="ok = !ok"
            style="position:relative;"
            text
            elevation="0"
          >
            {{ currentUser.username
            }}<v-avatar class="ml-1" color="grey darken-1" size="32"
              ><img src="@/assets/logo/user.png" alt="John"
            /></v-avatar>
            <v-btn
              v-if="ok"
              color="white"
              style="position: absolute; margin-top: 80px; background-color: red;"
              text
              @click="logout"
              >LOG OUT</v-btn
            >
          </v-btn>
        </div>
      </template>

      <template v-if="!isLoggedIn">
        <v-btn small text class="ml-1 text-decoration-none" to="/login">
          Login </v-btn
        ><v-btn small text class=" text-decoration-none" to="/register">
          Register
        </v-btn>
      </template>
    </v-app-bar>

    <v-navigation-drawer
      style="position: fixed; bottom:0;left: 0; z-index: 999;"
      color="blue lighten-3"
      v-model="drawer"
      absolute
      temporary
    >
      <v-list nav dense>
        <v-list-item-group
          v-model="group"
          active-class="black--text text--accent-4"
        >
          <v-list-item class="text-decoration-none" to="/home">
            <v-list-item-icon>
              <v-icon>mdi-home</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Home</v-list-item-title>
          </v-list-item>

          <v-list-item class="text-decoration-none" to="/login">
            <v-list-item-icon>
              <v-icon>mdi-account</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Login</v-list-item-title>
          </v-list-item>
          <v-list-item class="text-decoration-none" to="/register">
            <v-list-item-icon>
              <v-icon>mdi-account</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Register</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
    <v-navigation-drawer
      style="position: fixed; bottom:0; right: 0; z-index: 999;"
      color="blue lighten-3"
      v-model="cartOn"
      absolute
      right
      temporary
    >
      <v-list nav dense v-if="bagItemscount > 0">
        <v-list-item-group
          v-if="bagItemscount > 0"
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
          <v-list-item to="/cart" class="text-decoration-none">
            <v-list-item-icon>
              <v-icon>mdi-cart</v-icon>
            </v-list-item-icon>
            <v-list-item-title>CART INFO</v-list-item-title>
          </v-list-item>
          <v-list-item to="/checkout" class="text-decoration-none">
            <v-list-item-icon>
              <v-icon>mdi-cash</v-icon>
            </v-list-item-icon>
            <v-list-item-title>CHECKOUT {{ cartTotal }}$</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
        <v-list-item-group
          v-else
          v-model="group"
          active-class="black--text text--accent-4"
        >
          <v-list-item>
            <router-link class="router-link" to="/cart"
              ><v-list-item-title>Cart is Empty</v-list-item-title></router-link
            >
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import {
  getterTypes,
  actionTypes as authActionTypes,
} from "@/store/modules/auth";

export default {
  name: "Header",
  data: () => ({
    ok: false,
    search: "",
    drawer: false,
    cartOn: false,
    group: null,
  }),
  watch: {
    ok(newValue) {
      if (newValue == true) {
        setTimeout(() => {
          this.ok = false;
        }, 3000);
      }
    },
  },
  computed: {
    ...mapGetters({
      currentUser: getterTypes.currentUser,
      isLoggedIn: getterTypes.isLoggedIn,
      isAnonymous: getterTypes.isAnonymous,
      cartTotal: "cartTotal",
    }),
    bagItemscount() {
      return this.$store.getters.itemsNumber;
    },
    cartItem() {
      return this.$store.state.cartItems;
    },
  },
  methods: {
    logout() {
      this.$store.dispatch(authActionTypes.logout).then(() => {
        this.$router.push({ name: "Home" });
      });
    },
  },
};
</script>

<style scoped></style>

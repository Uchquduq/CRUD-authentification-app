<template>
  <v-app id="inspire">
    <v-app-bar app color="white" flat>
      <v-container class="py-0 fill-height">
        <v-text class="font-weight-medium">CRUD TABLE APP</v-text>
        <v-spacer></v-spacer>
        <template v-if="isLoggedIn">
          <v-btn text class="mr-2">
            <router-link
              class="a font-weight-medium"
              active-class="active"
              :to="{ name: 'Home' }"
              >CRUD</router-link
            >
          </v-btn>

          <v-menu offset-y>
            <template v-slot:activator="{ on, attrs }">
              <v-btn text v-bind="attrs" v-on="on">
                <v-avatar class="mr-2" color="primary" size="20"></v-avatar>
                {{ currentUser.username }}
              </v-btn>
            </template>
            <v-list>
              <v-list-item>
                <v-btn text @click="logout">
                  Logout
                </v-btn>
              </v-list-item>
            </v-list>
          </v-menu>
        </template>
        <template v-if="!isLoggedIn">
          <v-btn text>
            <router-link
              class="a font-weight-medium"
              active-class="active"
              :to="{ name: 'login' }"
              >Login in</router-link
            >
          </v-btn>
          <v-btn text>
            <router-link
              class="a font-weight-medium"
              active-class="active"
              :to="{ name: 'register' }"
              >Sign up</router-link
            >
          </v-btn>
        </template>
      </v-container>
    </v-app-bar>

    <v-main class="grey lighten-3">
      <v-container>
        <v-row>
          <v-col>
            <v-sheet min-height="70vh" rounded="lg">
              <router-view></router-view>
              <!--  -->
            </v-sheet>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import {
  getterTypes,
  actionTypes as authActionTypes, actionTypes
} from "@/store/modules/auth";
import { mapGetters } from "vuex";


export default {
  data: () => ({}),
  computed: {
    ...mapGetters({
      currentUser: getterTypes.currentUser,
      isLoggedIn: getterTypes.isLoggedIn,
      isAnonymous: getterTypes.isAnonymous,
    }),
  },
  methods: {
    logout() {
      this.$store.dispatch(authActionTypes.logout).then(() => {
        this.$router.push({ name: "login" });
      });
    },
  },
  mounted() {
    console.log("Hello app")
    this.$store.dispatch(actionTypes.getCurrentUser)
  }
};
</script>

<style scoped>
.a {
  color: black;
  text-decoration: none;
}
.active {
  color: blue;
}
</style>

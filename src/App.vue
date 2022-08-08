<template>
  <v-app style="position: relative; z-index:9999;">
    <Header />
    <v-main class="mt-16">
      <router-view></router-view>
    </v-main>
    <Footer></Footer>
    <!--  -->
  </v-app>
</template>

<script>
import Footer from "@/components/Footer";
import Header from "@/components/Header.vue";
export default {
  components: { Footer, Header },
  data: () => ({}),
};
</script>

<style>
.router-link {
  text-decoration: none;
  color: black;
}
.router-link:hover {
  text-decoration: none;
  color: rgb(12, 105, 218);
}
</style>

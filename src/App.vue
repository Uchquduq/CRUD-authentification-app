<template>
  <v-app>
    <Header />
    <v-main class="">
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

<style></style>

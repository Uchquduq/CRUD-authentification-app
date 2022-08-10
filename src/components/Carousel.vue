<template>
  <v-carousel hide-delimiters class="mt-0">
    <v-carousel-item
      v-for="(item, i) in items"
      :key="i"
      :src="item.src"
      reverse-transition="fade-transition"
      transition="fade-transition"
    ></v-carousel-item>
  </v-carousel>
</template>

<script>
export default {
  name: "Carousel",
  data: () => ({
    items: [
      {
        src: require("@/assets/images/slides/slide-1.png"),
      },
      {
        src: require("@/assets/images/slides/slide-2.png"),
      },
      {
        src: require("@/assets/images/slides/slide-1.jpg"),
      },
      {
        src: require("@/assets/images/slides/slide-2.jpg"),
      },
    ],
  }),
};
</script>

<style></style>

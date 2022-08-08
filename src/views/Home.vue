<template>
  <div >
    <Carousel />
      <Filters />
      <Grid />
  </div>
</template>

<script>
import Carousel from "@/components/Carousel.vue";
import Filters from "@/components/Home/Filters.vue";
import Grid from "@/components/Home/Grid.vue";
export default {
  name: "Home",
  components: { Carousel, Filters, Grid },
};
</script>

<style></style>

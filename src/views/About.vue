<template>
  <div class="about">
    <h1>This is an about page</h1>
    <div v-for="item of products" :key="item.id">
      <p>{{item.title}}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "About",
  data: () => ({
    products: null,
  }),
  mounted() {
    this.products = this.$store.state.items;
  },
};
</script>

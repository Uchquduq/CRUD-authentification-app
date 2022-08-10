<template>
  <v-card class="ma-4" elevation="1">
    <v-card-title>
      Products
      <v-spacer></v-spacer>
      <v-text-field
        v-model="search"
        append-icon="mdi-magnify"
        label="Search"
        single-line
        hide-details
      ></v-text-field>
    </v-card-title>
    <v-data-table
      :headers="headers"
      :items="desserts"
      :search="search"
    ></v-data-table>
  </v-card>
</template>

<script>
export default {
  name: "About",
  data: () => ({
    products: null,
    search: "",
    headers: [
      {
        text: "ID",
        align: "start",
        sortable: false,
        value: "id",
      },
      { text: "Name", value: "title" },
      { text: "Price", value: "price" },
      { text: "Color", value: "color" },
      { text: "Type", value: "type" },
      { text: "Rating", value: "rating" },
    ],
    desserts: [],
  }),
  mounted() {
    this.desserts = this.$store.state.items;
  },
};
</script>

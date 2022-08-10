<template>
  <div>
    <v-list v-for="(value, key) in cartItem" :key="key" class="" color="transparent">
      <v-list-item>
        <v-img
          height="100px"
          contain
          max-width="100px"
          :src="value.img"
        ></v-img>

        <v-list-item-title class="ml-10"
          >{{ value.title }} | {{ value.price }}$ 
          </v-list-item-title
        ><v-spacer></v-spacer>
        <v-btn icon @click="pop(value)"><v-icon>mdi-delete</v-icon></v-btn
        ><v-btn icon @click="minus(value)"><v-icon>mdi-minus</v-icon></v-btn
        >{{ value.quantity }} <v-btn icon @click="plus(value.id)"><v-icon>mdi-plus</v-icon></v-btn>
      </v-list-item>
      <v-divider></v-divider>
    </v-list>
  </div>
</template>

<script>
export default {
  name: "CartListItem",
  data: () => ({}),
  computed: {
    cartItem() {
      return this.$store.state.cartItems;
    },
  },
  methods: {
    minus(n) {
      return this.$store.commit("OUT_CART", n);
    },
    pop(n) {
      return this.$store.commit("DELETE_CART", n);
    },
    plus(n) {
      return this.$store.commit("PLUS_CART", n);
    },
  },
};
</script>

<style></style>

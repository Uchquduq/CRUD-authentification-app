<template>
  <div >
    <v-sheet color="" class="mt-8 mr-4 ml-4 mb-6" elevation="5" rounded="lg">
      <template v-if="cartItemsCount > 0">
        <v-list color="transparent">
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title> Cart Items </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-divider></v-divider>
          <CartListItem />
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title>
                Cart Total : {{ cartTotal }}$ 
              </v-list-item-title>
            </v-list-item-content>
            <v-btn class="text-decoration-none" to="/checkout"> Checkout </v-btn>
          </v-list-item>
        </v-list>
      </template>

      <template v-else>
        <v-list color="transparent">
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title> Cart is empty </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </template>
    </v-sheet>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import CartListItem from "@/components/Cart/CartListItem";
export default {
  name: "CartList",
  components: { CartListItem },
  data: () => ({
    items: []
  }),
  created() {
    this.items = this.$store.state.cartItems;
  },
  computed: { 
    cartItemsCount() {
      return this.$store.state.cartItems.length || "";
    },
    ...mapGetters(["cartTotal"]),
  },
};
</script>

<style></style>

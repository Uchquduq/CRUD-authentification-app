<template>
  <v-row>
    <v-col v-for="product in cardArray" :key="product.id" md="4" sm="6" xs="12">
      <v-hover v-slot="{ hover }" open-delay="50">
        <v-card
          :elevation="hover ? 10 : 2"
          :class="{ 'on-hover': hover }"
          class="mx-auto"
          max-width="360"
        >
          <v-img max-height="250" :src="product.img" contain></v-img>

          <v-card-title @click="infoProd(product)"
            ><router-link class="router-link"  to="/info">
              {{ product.title }}</router-link
            ></v-card-title
          >

          <v-card-text>
            <v-row align="center" class="mx-0">
              <v-rating
                :value="product.rating"
                color="amber"
                dense
                half-increments
                readonly
                size="14"
              ></v-rating>

              <div class="grey--text ms-2">{{ product.rating }} (413)</div>
            </v-row>

            <div class="mt-5 h6 text-black">{{ product.price }} $</div>
          </v-card-text>

          <v-card-actions class="m-0 pt-0">
            <v-spacer></v-spacer>
            <router-link class="router-link" to="/Info"
              ><v-btn elevation="0" @click="infoProd(product)"
                >Info</v-btn
              ></router-link
            >
            <v-btn class="ml-2" elevation="0" @click="addtoCart(product)">
              <v-icon>mdi-cart-plus</v-icon>
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-hover>
    </v-col>
  </v-row>
</template>

<script>
export default {
  props: ["cardArray"],
  name: "ProductCard",
  data: () => ({}),
  methods: {
    addtoCart(product) {
      this.$store.commit("IN_CART", product);
    },
    infoProd(product) {
      this.$store.commit("INFO_PRODUCT", product);
    },
  },
};
</script>

<style></style>

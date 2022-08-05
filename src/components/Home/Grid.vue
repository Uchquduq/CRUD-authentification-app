<template>
  <v-col>
    <v-sheet color="yellow" class="p-3" min-height="70vh" rounded="lg">
      <!--  -->
      <v-container>
        <v-row>
          <v-col
            v-for="product in slicedPage"
            :key="product.id"
            md="4"
            sm="6"
            xs="12"
            class=""
          >
            <v-hover v-slot="{ hover }" open-delay="50">
              <v-card
                :elevation="hover ? 10 : 0"
                :class="{ 'on-hover': hover }"
                :loading="loading"
                class="mx-auto"
                max-width="360"
              >
                <v-img max-height="250" :src="product.img" contain></v-img>

                <v-card-title>{{ product.title }}</v-card-title>

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

                    <div class="grey--text ms-2">
                      {{ product.rating }} (413)
                    </div>
                  </v-row>

                  <div class="mt-5 h6 text-black">{{ product.price }} $</div>
                </v-card-text>

                <v-card-actions class="m-0 pt-0">
                  <v-spacer></v-spacer>
                  <v-btn elevation="0">
                    <v-icon>mdi-cart-plus</v-icon>
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-hover>
          </v-col>
        </v-row>

        <div class="text-center mt-3">
          <v-pagination v-model="page" :length="totalPage"></v-pagination>
        </div>
      </v-container>
    </v-sheet>
  </v-col>
</template>

<script>
export default {
  name: "Grid",
  data: () => ({
    page: 1,
    loading: false,
    selection: 1,
    products: null,
    showCards: 6,
    currentItems: 0,
  }),
  watch: {
    page: function(newValue) {
      console.log(newValue);
      this.incCardNumber();
    },
  },
  computed: {
    it() {
      return this.$store.state.items;
    },
    slicedPage() {
      return this.products.slice(this.currentItems, this.showCards);
    },
    totalPage() {
      return Math.ceil(this.it.length / 6);
    },
  },
  created() {
    this.products = this.it;
  },
  methods: {
    incCardNumber() {
      if (this.page <= 1) {
        this.showCards = 6;
        this.currentItems = 0;
        console.log(this.currentItems, this.showCards);
      } else if (this.page > 1) {
        this.currentItems = this.page * 6 - 6;
        this.showCards = this.currentItems + 6;
        console.log(this.currentItems, this.showCards);
      } else if (this.page >= this.totalPage) {
        this.page = 0;
        this.showCards = 6;
        this.currentItems = 0;
        console.log(this.currentItems, this.showCards);
      }
      console.log(this.currentItems, this.showCards);
    },
  },
};
</script>

<style scoped>
.v-card.on-hover.theme--dark {
  background-color: rgba(255, 255, 255, 0.8);
}
.v-card.on-hover.theme--dark > .v-card__text {
  color: #000;
}
</style>

<template>
  <v-col>
    <v-sheet color="yellow" class="p-3" min-height="70vh" rounded="lg">
      <!--  -->
      <v-container>
        <v-row align="center" class=""
          ><v-hover v-slot="{ hover }" open-delay="50">
            <v-btn
              @click="sortPrice"
              :elevation="hover ? 5 : 1"
              class="white ml-1 mr-1 mb-1"
              >Sort Price</v-btn
            ></v-hover
          ><v-hover v-slot="{ hover }" open-delay="50">
            <v-btn
              @click="sortTrend"
              :elevation="hover ? 5 : 1"
              class="white ml-1 mr-1 mb-1"
              >Sort Trend</v-btn
            ></v-hover
          ><v-hover v-slot="{ hover }" open-delay="50">
            <v-btn
              @click="sortDate"
              :elevation="hover ? 5 : 1"
              class="white ml-1 mr-1 mb-1"
              >Sort Date</v-btn
            ></v-hover
          >
        </v-row>
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
                :elevation="hover ? 10 : 2"
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
        <v-row class="d-flex justify-space-around mb-1 mt-1 ml-1 pa-1">
          <v-col class="px-4">
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
    items: ["PRICE", "DATE", "TRENDING"],
    sortButton: "",
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
    sortPrice() {
      this.products.sort((a, b) => a.price - b.price);
      return (this.sortButton = "PRICE");
    },
    sortDate() {
      this.products.sort((a, b) => a.title.length * 2 - b.title.length * 4);
      return (this.sortButton = "DATE");
    },
    sortTrend() {
      this.products.sort((a, b) => a.type.length - b.type.length);
      return (this.sortButton = "TRENDING");
    },
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

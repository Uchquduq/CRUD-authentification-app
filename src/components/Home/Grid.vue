<template>
  <v-row class="m-1">
    <v-col md="3" sm="3">
      <v-sheet color="blue lighten-3" class="mb-4" rounded="lg">
        <v-list color="transparent">
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title> Filters </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-sheet>
      <v-sheet color="blue lighten-3" rounded="lg">
        <v-list color="transparent">
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title> Categories </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-divider></v-divider>
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title class="text-start btn" @click="sortI('notebook')">
                <v-icon>mdi-laptop</v-icon> Notebook
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title class="text-start btn" @click="sortI('smartphone')">
                <v-icon>mdi-cellphone</v-icon> Smartphones
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title class="text-start btn" @click="sortI('smartwatch')">
                <v-icon>mdi-watch</v-icon> Smart Watch
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title class="text-start btn" @click="sortI('chair')">
                <v-icon>mdi-table</v-icon> Chairs
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title class="text-start btn" @click="sortI('sofa')"><v-icon>mdi-sofa</v-icon> Sofa
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-sheet>
      <v-sheet color="blue lighten-3" class="mt-4" rounded="lg">
        <v-list color="transparent">
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title> Colors </v-list-item-title>
            </v-list-item-content>
          </v-list-item>

          <v-divider class="my-2"></v-divider>

          <v-row class="d-flex justify-start mb-1 mt-1 ml-1 pa-1">
            <div class="">
              <span
                class="circle"
                style="background-color:black"
                @click="sortI('black')"
              />
              <span
                class="circle"
                style="background-color:blue"
                @click="sortI('blue')"
              />
              <span
                class="circle"
                style="background-color:white"
                @click="sortI('white')"
              />
              <span
                class="circle"
                style="background-color:gray"
                @click="sortI('grey')"
              />
            </div>
          </v-row>
        </v-list>
      </v-sheet>
      <v-sheet color="blue lighten-3" class="mt-4" rounded="lg">
        <v-list color="transparent">
         

          <v-list-item-content class="ml-4">
            <a href="#grid"><v-list-item-title class="text-start btn" @click="reSet"><v-icon>mdi-restart</v-icon> Reset </v-list-item-title></a>
          </v-list-item-content>
        </v-list>
      </v-sheet>
    </v-col>
    <v-col id="grid">
      
      <v-sheet color="blue lighten-3" class="p-3" min-height="70vh" rounded="lg">
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
          <ProductCard :cardArray="slicedPage" />
          <v-row class="d-flex justify-space-around mb-1 mt-1 ml-1 pa-1">
            <v-col class="px-4"> </v-col>
          </v-row>

          <div class="text-center mt-3">
            <v-pagination v-model="page" :length="totalPage"></v-pagination>
          </div>
        </v-container>
      </v-sheet>
    </v-col>
  </v-row>
</template>

<script>
import ProductCard from "@/components/Products/ProductCard.vue";
export default {
  name: "Grid",
  components: { ProductCard },
  data: () => ({
    page: 1,
    loading: false,
    selection: 1,
    products: null,
    showCards: 9,
    currentItems: 0,
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
      return Math.ceil(this.products.length / 9);
    },
  },
  created() {
    this.products = this.it;
  },
  methods: {
    reSet() {
      return (this.products = this.it);
    },
    sortI(name) {
      this.products = this.it.filter(
        (e) => e.type.match(name) || e.color.match(name)
      );
      this.page = 1;
    },
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
        this.showCards = 9;
        this.currentItems = 0;
        console.log(this.currentItems, this.showCards);
      } else if (this.page > 1) {
        this.currentItems = this.page * 9 - 9;
        this.showCards = this.currentItems + 9;
        console.log(this.currentItems, this.showCards);
      } else if (this.page >= this.totalPage) {
        this.page = 0;
        this.showCards = 9;
        this.currentItems = 0;
        console.log(this.currentItems, this.showCards);
      }
      console.log(this.currentItems, this.showCards);
    },
  },
};
</script>

<style scoped>
.circle {
  height: 20px;
  width: 20px;
  border-radius: 50%;
  border: 0.7px solid #2c3539;
  display: inline-block;
  margin-left: 6px;
  cursor: pointer;
}
.v-card.on-hover.theme--dark {
  background-color: rgba(255, 255, 255, 0.8);
}
.v-card.on-hover.theme--dark > .v-card__text {
  color: #000;
}
</style>

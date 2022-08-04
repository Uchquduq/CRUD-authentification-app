<template>
  <v-row class="m-1">
    <v-col cols="3">
      <v-sheet color="yellow" rounded="lg">
        <v-list color="transparent">
          <v-list-item v-for="n in 5" :key="n" link>
            <v-list-item-content>
              <v-list-item-title> List Item {{ n }} </v-list-item-title>
            </v-list-item-content>
          </v-list-item>

          <v-divider class="my-2"></v-divider>

          <v-list-item link color="grey lighten-4">
            <v-list-item-content>
              <v-list-item-title>
                Refresh
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-sheet>
      <v-sheet color="yellow" class="mt-4" rounded="lg">
        <v-list color="transparent">
          <v-list-item v-for="n in 5" :key="n" link>
            <v-list-item-content>
              <v-list-item-title> List Item {{ n }} </v-list-item-title>
            </v-list-item-content>
          </v-list-item>

          <v-divider class="my-2"></v-divider>

          <v-list-item link color="grey lighten-4">
            <v-list-item-content>
              <v-list-item-title>
                Refresh
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-sheet>
    </v-col>

    <v-col>
      <v-sheet color="yellow" class="p-3" min-height="70vh" rounded="lg">
        <!--  -->
        <v-container>
          <v-row>
            <v-col v-for="n in 9" :key="n" cols="4" class="">
              <v-hover v-slot="{ hover }" open-delay="50">
                <v-card
                  :elevation="hover ? 10 : 2"
                  :class="{ 'on-hover': hover }"
                  :loading="loading"
                  class="mx-auto "
                  max-width="374"
                >
                  <v-img
                    height="250"
                    src="@/assets/images/products/smartphones/iphone13pro2.png"
                    contain
                  ></v-img>

                  <v-card-title>iPhone 13 Pro Max 256GB</v-card-title>

                  <v-card-text>
                    <v-row align="center" class="mx-0">
                      <v-rating
                        :value="5"
                        color="amber"
                        dense
                        half-increments
                        readonly
                        size="14"
                      ></v-rating>

                      <div class="grey--text ms-4">
                        5.0 (413)
                      </div>
                    </v-row>

                    <div class="mt-5 h6 text-black">
                      1000 $
                    </div>
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
            <v-pagination v-model="page" :length="6"></v-pagination>
          </div>
        </v-container>
      </v-sheet>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: "Home",
  data: () => ({ page: 1, loading: false, selection: 1 }),
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

<template>
  <v-row class="m-1">
    <v-col cols="2">
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
    </v-col>

    <v-col>
      <v-sheet color="yellow" class="p-3" min-height="70vh" rounded="lg">
        <!--  -->
        <v-container>
          <v-row>
            <v-col v-for="n in 9" :key="n" cols="4" class="">
              <v-hover v-slot="{ hover }" open-delay="50">
                <v-card
                  height="360"
                  :elevation="hover ? 10 : 2"
                  :class="{ 'on-hover': hover }"
                ></v-card>
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
  data: () => ({ page: 1 }),
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

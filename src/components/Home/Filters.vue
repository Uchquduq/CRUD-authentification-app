<template>
  <v-col md="3" sm="3">
    <v-sheet color="yellow" rounded="lg">
      <v-list color="transparent">
        <v-list-item>
          <v-list-item-content>
            <v-list-item-title> Categories </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-divider></v-divider>
        <v-list-item>
          <v-list-item-content>
            <v-list-item-title> Notebooks </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item>
          <v-list-item-content>
            <v-list-item-title> Smartphones </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item>
          <v-list-item-content>
            <v-list-item-title> Apple </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item>
          <v-list-item-content>
            <v-list-item-title> Android </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-sheet>
    <v-sheet color="yellow" class="mt-4" rounded="lg">
      <v-list color="transparent">
        <v-list-item>
          <v-list-item-content>
            <v-list-item-title> Colors </v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-divider class="my-2"></v-divider>

        <v-row class="d-flex justify-space-around mb-1 mt-1 ml-1 pa-1">
          <v-col>
            black
          </v-col>
          <v-col>
            white
          </v-col>
          <v-col>
            red
          </v-col>
          <v-col>
            blue
          </v-col>
        </v-row>
      </v-list>
    </v-sheet>
    <v-sheet color="yellow" class="mt-4" rounded="lg">
      <v-list color="transparent">
        <v-list-item>
          <v-list-item-content>
            <v-list-item-title> Slider </v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-divider class="my-2"></v-divider>

        <v-row class="d-flex justify-space-around mb-1 mt-1 ml-1 pa-1">
          <v-col class="px-4">
            <v-range-slider
              v-model="range"
              :max="max"
              :min="min"
              hide-details
              class="align-center"
            >
              <template v-slot:prepend>
                <v-text-field
                  :value="range[0]"
                  class="mt-0 pt-0"
                  hide-details
                  single-line
                  type="number"
                  style="width: 60px"
                  @change="$set(range, 0, $event)"
                ></v-text-field>
              </template>
              <template v-slot:append>
                <v-text-field
                  :value="range[1]"
                  class="mt-0 pt-0"
                  hide-details
                  single-line
                  type="number"
                  style="width: 60px"
                  @change="$set(range, 1, $event)"
                ></v-text-field>
              </template>
            </v-range-slider>
          </v-col>
        </v-row>
      </v-list>
    </v-sheet>
  </v-col>
</template>

<script>
export default {
  name: "Filters",
   data () {
      return {
        min: 1,
        max: 1000,
        range: [1, 1000],
      }
    },
};
</script>

<style></style>

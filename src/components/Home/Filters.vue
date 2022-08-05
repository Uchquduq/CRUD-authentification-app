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
  </v-col>
</template>

<script>
export default {
  name: "Filters",
};
</script>

<style></style>

<template>
  <CrudTable v-if="isLoggedIn" />
</template>

<script>
import { mapGetters } from "vuex";
import { getterTypes } from "@/store/modules/auth";
import CrudTable from "../components/CrudTable";

export default {
  name: "Home",
  components: {
    CrudTable,
  },
  computed: {
    ...mapGetters({
      currentUser: getterTypes.currentUser,
      isLoggedIn: getterTypes.isLoggedIn,
      isAnonymous: getterTypes.isAnonymous,
    }),
  },
};
</script>

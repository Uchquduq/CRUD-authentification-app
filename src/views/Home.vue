<template>
  <div>
    <Login v-if="isAnonymous" />
    <CrudTable v-if="isLoggedIn" />
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { getterTypes } from "@/store/modules/auth";
import CrudTable from "../components/CrudTable";
import Login from "@/views/Login";

export default {
  name: "Home",
  components: {
    CrudTable,
    Login,
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

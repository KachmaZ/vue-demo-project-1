// Main component of single user's page. Contains // personal and corporative
information about user

<template>
  <Loader v-if="isFetching" />
  <div v-else class="userPage container my-4">
    <div class="row">
      <UserInfo :user="getCurrentUser" />
    </div>
    <div class="btn-wrapper p-4 d-flex justify-content-center">
      <router-link class="btn btn-primary" to="/users">To main</router-link>
    </div>
  </div>
</template>

<script>
import UserInfo from "@/components/UserInfo";
// import CompanyInfo from "@/components/CompanyInfo";
import Loader from "@/components/Loader";

import { mapGetters, mapActions } from "vuex";

export default {
  props: {
    userId: String,
  },

  computed: mapGetters(["getCurrentUser", "isFetching"]),

  methods: { 
    ...mapActions(["fetchById"]),
  },

  components: {
    UserInfo,
    // CompanyInfo,
    Loader,
  },

  async mounted() {
    this.fetchById(this.userId);
  },
};
</script>

<style lang="scss" scope>
.userPage {
  width: 50%;

  color: #d0d326;

  border: 1px solid grey;
  border-radius: 10px;
  .row {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .btn-wrapper {
    border-top: 1px solid grey;
  }
}
</style>

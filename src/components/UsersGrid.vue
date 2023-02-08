// Full grid of user cards

<template>
  <div class="users-grid container">
    <div class="card-deck row gy-4 align-items-center">
      <UserCard v-for="user in getFilteredUsers" :key="user.id" :user="user" />
    </div>
  </div>
</template>

<script>
import UserCard from "@/components/UserCard";
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters(["getAllUsers", "getFilterValue"]),

    getFilteredUsers() {
      return this.getAllUsers.filter((user) =>
        user.username.toLowerCase().includes(this.getFilterValue)
      );
    },
  },

  components: {
    UserCard,
  },
};
</script>

<style lang="scss">
.users-grid {
  padding-top: 80px;
}
</style>

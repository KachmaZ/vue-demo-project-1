<template>
  <div class="users-grid-header container">
    <UsersSearch />
    <UsersAdd />
  </div>
</template>

<script>
import UsersSearch from "@/components/UsersSearch";
import UsersAdd from "@/components/UsersAdd";
export default {
  components: {
    UsersSearch,
    UsersAdd,
  },
};
</script>

<style lang="scss" scoped>
.users-grid-header {
  margin-top: 10px;
  display: flex;
  justify-content: space-around;
  color: #d0d326;
}
</style>

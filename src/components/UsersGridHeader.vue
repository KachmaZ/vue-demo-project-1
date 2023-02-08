<template>
  <div class="users-grid-header container">
    <ToMainLink />
    <UsersSearch />
    <UsersAdd />
  </div>
</template>

<script>
import UsersSearch from "@/components/UsersSearch";
import UsersAdd from "@/components/UsersAdd";
import ToMainLink from "./ToMainLink.vue";

export default {
  components: {
    UsersSearch,
    UsersAdd,
    ToMainLink,
  },
};
</script>

<style lang="scss" scoped>
.users-grid-header {
  width: 100%;
  padding: 10px;

  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;

  display: flex;
  justify-content: space-around;
  align-items: center;
  color: #d0d326;

  background: #1e233c;
}
</style>

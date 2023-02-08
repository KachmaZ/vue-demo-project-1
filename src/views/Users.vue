<template>
  <div class="users">
    <UsersGridHeader />
    <UsersGrid />
  </div>
</template>

<script>
// @ is an alias to /src
import UsersGridHeader from "@/components/UsersGridHeader";
import UsersGrid from "@/components/UsersGrid";

export default {
  name: "Users",
  components: {
    UsersGridHeader,
    UsersGrid,
  },
};
</script>

<style lang="scss" scoped>
.users {
  background: #1e233c;
}
</style>

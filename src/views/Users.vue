<template>
  <div class="users">
    <UsersGrid />
  </div>
</template>

<script>
// @ is an alias to /src
import UsersGrid from "@/components/UsersGrid";

export default {
  name: "Users",
  components: {
    UsersGrid,
  },
};
</script>

<style lang="scss" scoped>
.users {
  background: #1e233c;
}
</style>

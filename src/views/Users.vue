<template>
  <div class="users">
    <ToMainLink />
    <UsersGridHeader />
    <UsersGrid />
  </div>
</template>

<script>
// @ is an alias to /src
import ToMainLink from "@/components/ToMainLink";
import UsersGridHeader from "@/components/UsersGridHeader";
import UsersGrid from "@/components/UsersGrid";

export default {
  name: "Users",
  components: {
    ToMainLink,
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

// Single user's page view

<template>
  <div class="profile">
    <ToMainLink />
    <UserPage :userId="$route.params.userId" />
  </div>
</template>

<script>
import ToMainLink from "@/components/ToMainLink";
import UserPage from "@/components/UserPage";

export default {
  components: {
    ToMainLink,
    UserPage,
  },
};
</script>

<style lang="scss" scoped>
.profile {
  background: #1e233c;
}
</style>

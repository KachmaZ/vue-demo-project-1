// Single user's page view

<template>
  <div class="profile">
    <UserPage :userId="$route.params.userId"/>
  </div>
</template>

<script>
import UserPage from '@/components/UserPage'

export default {
    components: {
        UserPage,
    }
};
</script>

<style lang="scss" scoped>
.profile {
  background: #1e233c;
}
</style>
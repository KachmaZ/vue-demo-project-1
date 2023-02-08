<template>
  <div class="home-staff">
    <div class="link-menu row">
      <router-link class="link-tyle col-12 col-md-6" to="/range"
        >To Range</router-link
      >
      <router-link class="link-tyle col-12 col-md-6" to="/users"
        >To User</router-link
      >
    </div>
  </div>
</template>

<!-- TODO мобильная версия -->

<script>
import { mapActions } from "vuex";

export default {
  methods: mapActions(["fetchAll"]),

  async mounted() {
    this.fetchAll();
  },
};
</script>

<style lang="scss" scoped>
.link-menu {
  // width: 100%;
  height: 100vh;
  display: flex;

  .link-tyle {
    height: 100%;

    display: flex;
    justify-content: center;
    align-items: center;

    text-decoration: none;
    color: #d0d326;
    font-size: 72px;

    background: #1e233c;

    transition: 0.5s;

    &:hover {
      background-color: #333b66;
    }
  }
}
</style>

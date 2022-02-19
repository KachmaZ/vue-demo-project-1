<template>
  <div class="home">
    <div class="link-menu">
      <router-link class="link-tyle" to="/range">To Range</router-link>
      <router-link class="link-tyle" to="/users">To User</router-link>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Home",
};
</script>

<style lang="scss" scoped>
.link-menu {
  width: 100%;
  height: 100vh;
  display: flex;

  .link-tyle {
    width: 50%;
    height: 100%;

    display: flex;
    justify-content: center;
    align-items: center;

    text-decoration: none;
    color: rgb(208, 211, 38);
    font-size: 72px;

    background: #1e233c;

    transition: 0.5s;

    &:hover {
      background-color: #333b66;
    }
  }
}
</style>

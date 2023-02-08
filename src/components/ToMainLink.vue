<template>
  <router-link class="to-main-link" to="/">
    <img class="to-main-link_arrow" src="@/assets/home-arrow.svg" alt="" />
  </router-link>
</template>

<!-- TODO убрать на мобилках -->

<script>
export default {};
</script>

<style lang="scss" scoped>
.to-main-link {
  justify-content: center;
  align-items: center;

  text-decoration: none;
  color: #d0d326;

  &_arrow {
    width: 50px;
    height: 50px;

    color: #d0d326;
    transform: scaleX(-1);
  }
}

@media screen and (min-width: 992px) {
  .to-main-link {
    display: block;

    &_arrow {
      width: 50px;
      height: 50px;

      color: #d0d326;
      transform: scaleX(-1);
    }
  }
}
</style>

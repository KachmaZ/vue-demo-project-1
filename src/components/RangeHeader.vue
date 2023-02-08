<template>
  <div class="range-header">
    <ToMainLink />
  </div>
</template>
  
  <script>
import ToMainLink from "./ToMainLink.vue";

export default {
  components: {
    ToMainLink,
  },
};
</script>
  
  <style lang="scss" scoped>
.range-header {
  width: 100%;

  padding: 10px;

  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;

  display: flex;
  align-items: center;

  background: #1e233c;
}
</style>
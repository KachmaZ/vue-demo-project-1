<template>
  <div class="range">
    <ToMainLink />
    <CustomRange :scaled="true" />
  </div>
</template>

<script>
// @ is an alias to /src
import ToMainLink from "@/components/ToMainLink"
import CustomRange from "@/components/CustomRange.vue";

export default {
  name: "Range",
  components: {
    ToMainLink,
    CustomRange,
  },
};
</script>

<style lang="scss" scoped>
.range {
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;

  background: #1e233c;
}
</style>

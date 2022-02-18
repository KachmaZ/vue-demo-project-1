<template>
  <div class="range">
    <CustomRange />
  </div>
</template>

<script>
// @ is an alias to /src
import CustomRange from "@/components/CustomRange.vue";

export default {
  name: "Range",
  components: {
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
}
</style>
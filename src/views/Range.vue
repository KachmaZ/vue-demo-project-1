<template>
  <div class="range">
    <RangeHeader />
    <CustomRange :scaled="true" />
  </div>
</template>

<script>
// @ is an alias to /src
import RangeHeader from "../components/RangeHeader.vue";
import CustomRange from "@/components/CustomRange.vue";

export default {
  name: "Range",
  components: {
    RangeHeader,
    CustomRange,
  },
};
</script>

<style lang="scss" scoped>
.range {
  height: 100vh;
  position: relative;

  display: flex;
  justify-content: center;
  align-items: center;

  background: #1e233c;
}
</style>

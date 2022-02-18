<template>
  <div class="home">
    <CustomRange />
  </div>
</template>

<script>
// @ is an alias to /src
import CustomRange from "@/components/CustomRange.vue";

export default {
  name: "Home",
  components: {
    CustomRange,
  },
};
</script>

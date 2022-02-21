<template>
  <input
    class="users-search"
    type="text"
    @input="setFilter"
    placeholder="Search..."
  />
</template>

<script>
import { mapActions } from "vuex";

export default {
  methods: {
    ...mapActions(["setFilterValue"]),

    setFilter(event) {
      this.setFilterValue(event.target.value);
    },
  },
};
</script>

<style lang="scss" scoped>
.users-search {
  padding-left: 5px;

  color: #d0d326;

  background: #1e233c;

  outline: none;
  border: 1px solid #d0d326;
  border-radius: 5px;

  &::placeholder {
    color: #d7db00d3;
  }
}
</style>

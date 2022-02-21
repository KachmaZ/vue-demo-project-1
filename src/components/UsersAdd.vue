<template>
  <div class="add-comp">
    <div class="add-btn" @click="showToggle">Add user +</div>

    <form v-if="shown" @submit.prevent="submitNewUser" class="add-form">
      <input
        type="text"
        name="username"
        autocomplete="off"
        placeholder="Username"
      />
      <input
        type="text"
        name="name"
        autocomplete="off"
        placeholder="Full name"
      />
      <input 
        type="email" 
        name="email" 
        autocomplete="off" 
        placeholder="Email" 
      />
      <button type="submit">Add +</button>
    </form>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  data() {
    return {
      shown: false,
    };
  },

  methods: {
    ...mapActions(["addUser"]),

    showToggle() {
      this.shown = !this.shown;
    },

    submitNewUser(event) {
      let props = event.target.elements;
      let user = {
        username: props.username.value,
        name: props.name.value,
        email: props.email.value,
      };

      this.addUser(user);
      this.showToggle
    },
  },
};
</script>

<style lang="scss" scoped>
.add-comp {
  position: relative;

  color: #d0d326;

  .add-btn {
    cursor: pointer;
  }

  .add-form {
    padding: 10px;
    position: absolute;
    z-index: 10;

    display: flex;
    flex-direction: column;

    background: #1e233c;

    border: 1px solid grey;
    border-radius: 10px;

    input {
      background: inherit;
      border: none;

      color: #d0d326;

      &:focus {
        outline: none;
        border: 1px solid #d0d326;
        border-radius: 5px;
      }
    }

    button {
      position: relative;
      margin-left: auto;
      margin-right: auto;

      width: 50%;

      color: #babd13;

      background: #516087;
      border-radius: 15px;
    }
  }
}
</style>

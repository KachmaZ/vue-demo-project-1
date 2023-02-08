<template>
  <div class="add-comp">
    <div class="add-btn" @click="showToggle">
      <svg
        fill="#d0d326"
        version="1.1"
        id="Capa_1"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        width="800px"
        height="800px"
        viewBox="0 0 45.402 45.402"
        xml:space="preserve"
      >
        <g>
          <path
            d="M41.267,18.557H26.832V4.134C26.832,1.851,24.99,0,22.707,0c-2.283,0-4.124,1.851-4.124,4.135v14.432H4.141
		c-2.283,0-4.139,1.851-4.138,4.135c-0.001,1.141,0.46,2.187,1.207,2.934c0.748,0.749,1.78,1.222,2.92,1.222h14.453V41.27
		c0,1.142,0.453,2.176,1.201,2.922c0.748,0.748,1.777,1.211,2.919,1.211c2.282,0,4.129-1.851,4.129-4.133V26.857h14.435
		c2.283,0,4.134-1.867,4.133-4.15C45.399,20.425,43.548,18.557,41.267,18.557z"
          />
        </g>
      </svg>
    </div>

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
      <input type="email" name="email" autocomplete="off" placeholder="Email" />
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
      this.showToggle;
    },
  },
};
</script>

<style lang="scss" scoped>
.add-comp {
  position: relative;

  color: #d0d326;

  .add-btn {
    width: 50px;
    height: 50px;

    padding: 10px;

    display: flex;
    justify-content: center;
    align-items: center;

    font-size: 24px;
    line-height: 30px;

    border: 3px solid #d0d326;
    border-radius: 50%;

    cursor: pointer;
  }

  .add-form {
    padding: 10px;
    margin-top: 10px;

    position: absolute;

    right: 20px;

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

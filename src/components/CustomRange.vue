<template>
  <div class="container">
    <div class="range-container">
      <input
        class="custom-range"
        type="range"
        min="0"
        max="100"
        v-model="value"
      />

      <div class="btns-container">
        <div class="range-btn" @click="setValue(25)">25%</div>
        <div class="range-btn" @click="setValue(50)">50%</div>
        <div class="range-btn" @click="setValue(75)">75%</div>
        <div class="range-btn" @click="setValue(100)">100%</div>
      </div>
    </div>
    <div class="range-value">{{ value }}</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: "0",
    };
  },

  methods: {
    setValue: function (value) {
      this.value = value;
    },
  },
};
</script>

<style lang="scss" scoped>
.container {
  width: 400px;
  margin: 20px;
  display: flex;

  .range-container {
    width: 100%;
    margin-right: 20px;
    display: flex;
    flex-direction: column;

    .custom-range {
      -webkit-appearance: none; /* Hides the slider so that custom slider can be made */
      width: 100%; /* Specific width is required for Firefox. */
      margin-right: 20px;
      margin-bottom: 20px;
      background: transparent; /* Otherwise white in Chrome */

      display: flex;

      &:focus {
        outline: none; /* Removes the blue border. You should probably do some kind of focus styling for accessibility reasons though. */
      }

      &::-ms-track {
        width: 100%;
        cursor: pointer;

        /* Hides the slider so custom styles can be added */
        background: transparent;
        border-color: transparent;
        color: transparent;
      }

      &::-webkit-slider-runnable-track {
        height: 18px;

        padding: 1px;

        background: linear-gradient(
          90deg,
          #5fcab5 0%,
          #f1b767 60%,
          #c87575 100%
        );

        border-radius: 10px;
        box-shadow: 1px 1px 1px #474747;
      }

      &::-webkit-slider-thumb {
        width: 16px;
        height: 16px;

        background: #ffffff;

        box-shadow: 1px 1px 1px #474747;
        border: 1px solid #00001e;
        border-radius: 50%;

        cursor: pointer;
        -webkit-appearance: none;
      }
    }

    .btns-container {
      display: flex;
      justify-content: space-around;

      .range-btn {
        width: 15%;
        height: 20px;

        display: flex;
        justify-content: center;
        align-items: center;

        color: #ffffff;
        font-size: 14px;

        background-color: #516087;

        border-radius: 10px;

        cursor: pointer;
      }
    }
  }

  .range-value {
    width: 40px;
    height: 25px;

    display: flex;
    justify-content: center;
    align-items: center;

    color: #ffffff;
    font-size: 14px;
    line-height: 14px;

    border: 1px solid #ffffff;
  }
}
</style>
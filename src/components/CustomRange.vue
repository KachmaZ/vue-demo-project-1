<template>
  <div class="custom-range">
    <div class="range-container">
      <input
        class="range-container_input"
        type="range"
        min="0"
        max="100"
        v-model="value"
      />

      <div class="range-container_btns">
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
.custom-range {
  margin: 20px;
  display: flex;

  .range-container {
    margin-right: 20px;

    display: flex;
    flex-direction: column;

    &_input {
      width: 300px;

      -webkit-appearance: none; /* Hides the slider so that custom slider can be made */
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

    &_btns {
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
        user-select: none;

        background-color: #516087;

        border-radius: 10px;

        cursor: pointer;
      }
    }
  }

  .range-value {
    min-width: 40px;
    height: 20px;

    display: flex;
    justify-content: center;
    align-items: center;

    color: #ffffff;
    font-size: 14px;
    line-height: 14px;

    border: 1px solid #ffffff;
    border-radius: 5px;
  }
}

@media screen and (min-width: 576px) {
  .custom-range {
    transform: scale(1.5);
  }
}

@media screen and (min-width: 992px) {
  .custom-range {
    transform: scale(2);
  }
}
</style>

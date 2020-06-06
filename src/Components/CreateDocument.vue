<template>
  <button
    v-on:click="$emit('handleClick')"
    :style="style"
    :class="{ fullWidth: isFullWidth, halfWidth: !isFullWidth, isOneThird }"
    class="main-button"
  >
    {{ label }}
  </button>
</template>

<script>
export default {
  name: "main-button",
  data: function () {
    return {
      style: "width:" + this.width,
    };
  },
  props: {
    label: {
      type: String,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.main-button {
  cursor: pointer;
  height: 50px;
  background: #FFFFFF;
  border-radius: 5px;
  border: none;
  font-style: normal;
  font-weight: bold;
  font-size: 15px;
  line-height: 18px;
  color: #303030;
}
button:focus {
  outline: none;
}
</style>

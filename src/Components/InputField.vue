<template>
  <div class="input-styled">
    <label>
      {{ label }}
    </label>
    <br />
    <input
      @mouseleave="showOutline = false"
      :style="getClass()"
      v-if="!isTextArea"
      @keyup="$emit('sendInput', model)"
      :type="type"
      v-model="model"
      :placeholder="placeholder"
    />
    <!-- 
    <textarea
      @click="showOutline = true"
      @mouseleave="showOutline = false"
      :style="getClass()"
      @keyup="$emit('sendInput', model)"
      rows="5"
      v-else
      v-model="model"
    >
    </textarea> -->
  </div>
</template>

<script>
export default {
  name: "",
  data: function () {
    return {
      model: "",
      showOutline: false,
    };
  },

  methods: {
    getClass() {
      return this.showOutline ? "border: 1px solid #3A85FC !important;" : "";
    },
  },
  props: {
    label: {
      type: String,
      required: true,
    },
    width: {
      type: String,
      required: false,
    },

    placeholder: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      required: true,
    },
    isTextArea: {
      type: Boolean,
      required: false,
    },
    value: {
      type: String,
      required: false,
    },
  },
  created() {
    if (this.value) {
      this.model = this.value;
    }
  },
};
</script>

<style lang="scss" scoped>
@media only screen and (max-width: 900px) {
  .input-styled {
    label {
      position: relative;
      top: 10px;
      left: 20px;
      background: #fff;
      padding: 0 10px;
      border-radius: 3px;
      z-index: 10;
      font-style: normal;
      font-weight: normal;
      font-size: 12px;
      line-height: 17px;
      color: #3a85fc;
    }
    input {
      font-family: "Inter", sans-serif;
      width: 82%;
      height: 35px;
      border: 1px solid #404040;
      padding: 0 25px;
      color: rgb(106, 106, 106);
      font-size: 13px;
    }

    // textarea {
    //   font-family: "Inter", sans-serif;
    //   width: 100%;
    //   border: 1px solid rgba(106, 106, 106, 0.5);
    //   border-radius: 5px;
    //   padding: 20px 25px;
    //   color: rgb(106, 106, 106);
    //   font-size: 13px;
    // }

    textarea:focus {
      outline: none;
    }
  }
}
</style>

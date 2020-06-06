<template>
  <div class="sign-component">
    <canvas
      id="my-canvas"
      @touchstart="startDrawing"
      @touchmove="drawOnCanvasMobile"
      @touchend="stopDrawing"
      @mousedown="startDrawing"
      @mouseup="stopDrawing"
      @mouseover="drawOnCanvas"
      :width="canvasWidth"
      :height="canvasHeight"
      ref="canvas"
    >
    </canvas>



     <div class="sign-btn-div">
         <Button @onButtonClick="clearCanvas()" label="Clear" />
     <Button @onButtonClick="submitCanvas()" label="Sign" />
     </div>
  </div>
</template>

<script>
import Button from './Button';


export default {
  name: "sign-component",
  components:{
      Button
  },
  data: function() {
    return {
      that: this,
      shouldDraw: false,
      canvasWidth: 400,
      canvasHeight: 400,
      pixelSize: 2,
      dimension: 1,
      repeatX: 200,
      repeatY: 200,
    };
  },

  methods: {
    submitCanvas() {
      let canvasImage = this.$refs.canvas.toDataURL();
      this.$emit('onSignDone', canvasImage)
    },
    clearCanvas() {
      this.$refs.canvas
        .getContext("2d")
        .clearRect(0, 0, this.canvasWidth, this.canvasHeight);
    },
    startDrawing() {
      this.shouldDraw = true;
    },
    stopDrawing(e) {
      this.shouldDraw = false;
      //   const ctx = this.$refs.canvas.getContext("2d");
      //   ctx.closePath();
      e.offsetX = null;
      e.offsetY = null;
    },

    getTouchPos(canvasDom, touchEvent) {
      var rect = canvasDom.getBoundingClientRect();
      return {
        x: touchEvent.touches[0].clientX - rect.left,
        y: touchEvent.touches[0].clientY - rect.top,
      };
    },
    drawOnCanvas(e) {
      const ctx = window.xyz.$refs.canvas.getContext("2d");

      if (!this.shouldDraw) return;
      ctx.lineWidth = 4;
      ctx.lineCap = "round";

      ctx.lineTo(e.offsetX, e.offsetY);
      ctx.stroke();

      ctx.beginPath();
      ctx.moveTo(e.offsetX, e.offsetY);
    },
    drawOnCanvasMobile(e) {
      const ctx = window.xyz.$refs.canvas.getContext("2d");

      if (!this.shouldDraw) return;
      ctx.lineWidth = 4;
      ctx.lineCap = "round";

      e.offsetX = this.getTouchPos(window.xyz.$refs.canvas, e)["x"];
      e.offsetY = this.getTouchPos(window.xyz.$refs.canvas, e)["y"];

      ctx.lineTo(e.offsetX, e.offsetY);
      ctx.stroke();

      ctx.beginPath();
      ctx.moveTo(e.offsetX, e.offsetY);
    },
  },

  created() {
    this.canvasWidth = window.innerWidth * 0.8;
    this.canvasHeight = window.innerHeight * 0.5;
    window.xyz = this;
  },
};
</script>

<style lang="scss" scoped>
.sign-component {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;


  #my-canvas {
    border: 1px solid black;
  }

  .sign-btn-div{
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 10px;
  }
}
</style>

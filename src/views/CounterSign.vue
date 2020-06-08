<template>
  <div class="countersign">
    <div>
      <MobileHeader />
    </div>

    <div class="non-disclosure-agreement">
      <h3>Non-Disclosure Agreement</h3>
      <p>
        elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque. Duis
        vulputate commodo lectus, ac blandit elit tincidunt id. Sed rhoncus,
        tortor sed eleifend tristique, tortor mauris molestie elit, et lacinia
        ipsum quam nec dui. Quisque nec mauris sit amet elit iaculis pretium sit
        amet quis magna. Aenean velit odio, elementum in tempus ut, vehicula eu
        diam. Pellentesque rhoncus aliquam mattis. Ut vulputate eros sed felis
        sodales nec vulputate justo hendrerit. Vivamus varius pretium ligula, a
        aliquam odio euismod sit amet. Quisque laoreet sem sit amet orci
        ullamcorper at ultricies metus viverra. Pellentesque arcu mauris,
        malesuada quis ornare accumsan, blandit sed diam. Lorem ipsum dolor sit
        amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu
        pharetra nec, mattis ac neque. Duis vulputate commodo lectus, ac blandit
        elit tincidunt id. Sed rhoncus, tortor sed eleifend tristique, tortor
        mauris molestie elit, et lacinia ipsum quam nec dui. Quisque nec mauris
        sit amet elit iaculis pretium sit amet quis magna. Aenean velit odio,
        elementum in tempus ut, vehicula eu diam. Pellentesque rhoncus aliquam
        mattis. Ut vulputate eros sed felis sodales nec vulputate justo
        hendrerit. Vivamus varius pretium ligula, a aliquam odio euismod sit
        amet. Quisque laoreet sem sit amet orci ullamcorper at ultricies metus
        viverra. Pellentesque arcu mauris, malesuada quis ornare accumsan,
        blandit sed diam.
      </p>
    </div>

    <div class="btn-container">
      <Button
        v-on:handleClick="this.handleSearchClick"
        class="btn"
        label="Counter-Sign"
        width="40%"
      />
      <Button
        v-if="!isBtnClicked"
        v-on:handleClick="this.handleSearchClick"
        class="btn"
        width="40%"
        label="Email"
      />
    </div>
  </div>
</template>

<script>
import MobileHeader from "../Components/MobileHeader";
import Button from "../Components/Button";

export default {
  name: "Home",
  components: {
    MobileHeader,
    Button,
  },
};
</script>

<style lang="scss" scoped>
@media only screen and(max-width: 900px) {
  * {
    margin: 0;
    padding: 0;
    max-width: 100%;
  }

  .non-disclosure-agreement {
    text-align: center;
    font-size: 16px;
    padding: 0 5px;
    margin: 20px 0;

    h3 {
      margin: 10px 0;
    }
  }

  .btn-container {
    display: flex;
    justify-content: space-between;
  }

  .home {
    * {
      padding: 12px;
    }
  }

  img {
    border: 1px solid gray;
    width: 92%;
  }
}
</style>

<template>
  <div class="home">
    <div>
      <MobileHeader />
    </div>

    <div class="signature-container">
      <p>Sign under the line below</p>

      <div class="signature-box">
        <hr />
      </div>
    </div>
    <br /><br />
    <Button
      v-on:handleClick="this.handleSearchClick"
      class="btn"
      label="Submit Signature"
      width="50%"
    />
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

  .signature-container {
    height: 50vh;
    border: 1px solid gray;

    hr {
    }
  }

  button {
    margin: 0 5rem;
  }

  .home {
    * {
      padding: 12px;
    }
  }
}
</style>

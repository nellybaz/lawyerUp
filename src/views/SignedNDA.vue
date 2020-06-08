<template>
  <div class="signed">
    <div>
      <MobileHeader />
    </div>

    <div class="non-disclosure-agreement">
      <h3>NDA signed and safe</h3>
    </div>

    <div class="logo">
      <img src="../assets/verified.png" alt="" />
    </div>

    <Button
      v-on:handleClick="this.handleSearchClick"
      class="btn"
      label="Counter-Sign"
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

  button{
      margin: 0 5rem;
  }

  img {
    border: 1px solid gray;
    width: 50%;
    margin: 4rem 5.5rem;
  }
}
</style>

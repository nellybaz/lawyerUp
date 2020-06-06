<template>
  <div class="home">
    <div>
      <MobileHeader />
    </div>

    <div>
      <img src="../assets/img-icon.svg" alt="" />
    </div>
    <div>
      <p>
        A lot about LawyerUp will be written here and will want to give the user
        something that will make them want to sign up and utilise our app :)
      </p>
    </div>

    <div class="btn-container">
      <Button
        v-on:handleClick="this.handleSearchClick"
        class="btn"
        label="Sign in"
        width="40%"
      />
      <Button
        v-if="!isBtnClicked"
        v-on:handleClick="this.handleSearchClick"
        class="btn"
        width="40%"
        label="Sign Up"
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

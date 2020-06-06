<template>
  <div class="login">
    <div>
      <MobileHeader />
    </div>

    <div class="logo">
      <img src="../assets/img-icon.svg" alt="" />
    </div>

    <InputField type="text" placeholder="Email address" class="form-control" />
    <InputField type="text" placeholder="Password" class="form-control" />

    <Button
      v-on:handleClick="this.handleSearchClick"
      class="btn"
      label="Login"
      width="50%"
    />
    <br />
    <br /><br />

    <span>OR</span>
    <Button
      v-on:handleClick="this.handleSearchClick"
      class="btn"
      label="Use Facebook"
      width="50%"
    />
  </div>
</template>

<script>
import MobileHeader from "../Components/MobileHeader";
import Button from "../Components/Button";
import InputField from "../Components/InputField";

export default {
  name: "Home",
  components: {
    MobileHeader,
    Button,
    InputField,
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
  .form-control {
    margin: 1rem;
  }

  .logo {
    width: 50%;
    margin: 0 5.5rem;
  }

  span {
    margin: 0 10rem;
  }

  button {
    margin: 20px 80px;
  }

  header {
    margin: 10px 0;
    text-align: center;
  }
}
</style>

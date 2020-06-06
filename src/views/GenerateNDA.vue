<template>
  <div class="nda">
    <div>
      <MobileHeader />
    </div>

    <div class="profile-container">
      <div>
        <img src="../assets/profile-pic.png" alt="" />
      </div>

      <div>
        <p>
          CompanyName(Pty)LTD <br />
          Themba Zulu <br />
          CEO
        </p>
      </div>
    </div>

    <div class="creating-nda">
      <h3>Creating an NDA for ya</h3>
      <p>
        simply add details of the Receiving Party in the fields below.
        <span>We'll do the magic</span>
      </p>
    </div>

    <div class="form-container">
      <div>
        <InputField
          type="text"
          placeholder="Company Name/Personal Name"
          class="form-control"
        />
        <span
          >Add Receiving Party's Company Name, if person, then name and last
          name</span
        >
      </div>
      <br />

      <div>
        <InputField
          type="text"
          placeholder="Enter Company Reg/I.D Num"
          class="form-control"
        />
        <span
          >Add Receiving Party's Company registration, if person, add I.D
          Num</span
        >
      </div>
      <br />

      <div>
        <InputField
          type="text"
          placeholder="Enter Address"
          class="form-control"
        />
        <span>Add Receiving Party's Address</span>
      </div>

      <br />

      <div>
        <InputField
          type="text"
          placeholder="Enter Name and Last name"
          class="form-control"
        />
        <span>Add Receiving Party's representative</span>
      </div>
    </div>
    <br />
    <br />
    <Button
      v-on:handleClick="this.handleSearchClick"
      class="btn"
      label="Generate NDA"
      width="100%"
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

  .form-container {
    text-align: center;
    padding: 10px;
    span {
      color: red;
    }
  }

  .creating-nda {
    span {
      color: red;
    }
    p {
      text-align: center;
      padding: 20px;
    }
  }

  h3 {
    text-align: center;
  }

  .create-document-container {
    padding: 15px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 15px 50px;
  }

  .create-doc {
    border: 1px solid #303030;
    height: 135px;
    border-radius: 120px;
  }

  .profile-container {
    display: flex;
    margin: 30px 0;

    img {
      width: 50%;
      height: 70px;
      border-radius: 50px;
    }
    p {
      width: 80%;
      border: 1px solid rgba(128, 128, 128, 0.205);
      padding: 10px 20px;
      border-radius: 5px;
    }
  }

  button {
    // float: right;
  }

  header {
    margin: 10px 0;
    text-align: center;
  }
}
</style>

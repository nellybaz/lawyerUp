<template>
  <div class="user">
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

    <h3>Create a document</h3>
    <div class="create-document-container">
      <CreateDocument
        v-on:handleClick="this.handleSearchClick"
        class="create-doc"
        label="Non-Disclosure"
        width="120px"
      />
      <CreateDocument
        v-on:handleClick="this.handleSearchClick"
        class="create-doc"
        label="Letter Of Inten"
        width="120px"
      />
      <CreateDocument
        v-on:handleClick="this.handleSearchClick"
        class="create-doc"
        label="Memorandum Of Understanding"
        width="120px"
      />
      <CreateDocument
        v-on:handleClick="this.handleSearchClick"
        class="create-doc"
        label="Partnership Agreement"
        width="120px"
      />
      <CreateDocument
        v-on:handleClick="this.handleSearchClick"
        class="create-doc"
        label="Partnership Agreement"
        width="100px"
      />
      <CreateDocument
        v-on:handleClick="this.handleSearchClick"
        class="create-doc"
        label="Non-Disclosure"
        width="100px"
      />
    </div>
    <Button
      v-on:handleClick="this.handleSearchClick"
      class="btn"
      label="More Docs"
      width="50%"
    />
  </div>
</template>

<script>
import MobileHeader from "../Components/MobileHeader";
import CreateDocument from "../Components/CreateDocument";
import Button from "../Components/Button";

export default {
  name: "Home",
  components: {
    MobileHeader,
    CreateDocument,
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

  h3 {
    margin: 5rem 0 2rem 0;
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
    float: right;
  }

  header {
    margin: 10px 0;
    text-align: center;
  }
}
</style>

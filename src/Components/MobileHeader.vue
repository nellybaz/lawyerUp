<template>
  <div class="home">
    <div>
      <header>
        <h1>LawerUp</h1>
      </header>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Home",
  
  components: {},
};
</script>

<style lang="scss" scoped>
@media only screen and(max-width: 900px) {
  * {
    margin: 0;
    padding: 0;
    max-width: 100%;
  }

  header {
    margin: 10px 0;
    text-align: center;
  }
}
</style>

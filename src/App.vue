<template>
  <div id="app">
    <router-view v-if="isMobile()"/>
    <div class="desktop-warn" v-else>
      <h3>LawyerUp is only available on mobile</h3>
    </div>
  </div>
</template>

<script>

import {mapGetters} from 'vuex';


export default {
  methods:{
    ...mapGetters(['isMobile'])
  }
}
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background: #EEF2F7;
}

* {
  box-sizing: border-box;
  margin: 0;
}

.desktop-warn{
  height: 100vh;
  width: 100vw;

  display:flex;
  align-items:center;
  justify-content:center;
  flex-direction: column;
}
</style>

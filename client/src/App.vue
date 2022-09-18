<template>
  
<router-view/>

<footer>ZIWI-BAHA-DALY Copyrigths 2022 ©️ </footer>


</template>
<script>
  
// import Exp_navbar from "./components/exp_navbar.vue";
export default {
  components: {
    // Exp_navbar
}
}
</script>
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>

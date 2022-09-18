<template>

<router-view/>

</template>
<script>
  
// import home_navbar from "./components/home_navbar.vue";
// import HomeView from "./views/HomeView.vue";
export default {
data(){
  
},

  components: {
    // home_navbar,
    // HomeView
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

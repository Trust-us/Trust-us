<template lang="">
    <div>
        <nav>
    <router-link to="/">Home</router-link> |
   
    <router-link to="/About">Login/SignUp</router-link> 

  </nav>
  <router-view/>
    </div>
</template>
<script>
export default {
    name:'home_navbar'
}
</script>
<style lang="">
    
</style>
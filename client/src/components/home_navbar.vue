<template lang="">
    <div>
        <nav >
    <router-link to="/">Home</router-link> 
    <router-link to="/Signin"  >Signin</router-link> 
    <router-link to="/SignUp"  class="SignupCon">SignUp</router-link> 

  </nav>
  <router-view/>
    </div>
</template>
<script>
export default {
    name: 'home_navbar'
}
</script>
<style >
    
   
</style>
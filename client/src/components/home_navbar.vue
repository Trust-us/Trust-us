<template lang="">
    <div>
        <nav class="navbar">
    <router-link to="/">Home</router-link> 
   
    <router-link to="/Signin">Signin</router-link> 
    <router-link to="/SignUp">SignUp</router-link> 

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
      .navbar{
        text-align: center;
        background: #ddd;
        margin: 10px;
        border-radius: 10px;
        /* display: inline-block; */
    }
</style>
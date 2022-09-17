<template lang="">
    <div>
        <nav class="topnav">
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
      body {
        margin: 0;
        font-family: Arial, Helvetica, sans-serif;
    }
    
    .topnav {
        overflow: hidden;
        background-color: #333;
    }
    
    .topnav a {
        float: left;
        color: #f2f2f2;
        text-align: center;
        padding: 1px 30px;
        text-decoration: none;
        font-size: 17px;
    }
    
    .topnav a:hover {
        background-color: #ddd;
        color: black;
    }
    
    .topnav a.active {
        background-color: #04AA6D;
        color: white;
    }
 
.SignupCon{
  margin-left:1100px;

}
   
</style>
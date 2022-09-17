<template lang="">
    <div>


        <nav class="topnav">
            <router-link to="/">Home</router-link> 
            <router-link to="/Experience">Experience</router-link> 
            <router-link to="/share">Share</router-link> 
            <router-link to="/about">About</router-link> 
            <router-link class="log" to="/about">Log out</router-link> 
            
        </nav>
        <router-view/>
    </div>
</template>
<script>
export default {
    name: 'exp_navbar',
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
 
/* .log{
  margin-left:900px;

} */
</style>
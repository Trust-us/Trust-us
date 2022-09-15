<template lang="">
    <div>


        <nav class="navbar">
            <router-link to="/">Home</router-link> 
            <router-link to="/Experience">Experience</router-link> 
            <router-link to="/share">Share</router-link> 
            <router-link to="/about">About</router-link> 
            <router-link to="/about">Log out</router-link> 
            
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
    .navbar{
        text-align: center;
        background: #ddd;
        margin: 10px;
        border-radius: 10px;
        /* display: inline-block; */
    }
</style>
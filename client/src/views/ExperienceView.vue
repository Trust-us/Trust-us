<template lang="">
    
    <div >
        <div class="n">
    <nav class="topnav">
      
      
      <a class="baha">Trust-us</a> 
      <router-link to="/Experience">Experience</router-link>
      <router-link to="/share">Share</router-link>
      <router-link to="/about">About</router-link>
      <router-link v-on:click="Logout" to="/Signin">Logout</router-link>
    </nav>
    <router-view />
  </div>
       <div class="box" v-for="item in state.experiences" :key="item._id">
        <img v-bind:src="item.img" />
        <div>
        <h4>Name: {{item.name}}</h4>
         <h4>Category: {{item.category}}</h4>
         <h4>Location :{{item.location}}</h4>
         <h4>Description :{{item.description}}</h4>
        <h4> Rate :{{item.rate}}/5</h4>
        </div>
       
         <button type="button" class="btn btn-primary" @click="editExperience(item._id)  " >Edit</button>
         <button  type="button" class="btn btn-danger" @click="deleteExperience(item._id)">Delete</button>
         </div>
    </div>
</template>
<script>
import ExperienceCrud from '../modules/ExperienceCrud'
import {onMounted } from 'vue'

export default {
 
    components: {
  },
 setup() {

const {state , GetAllExperiences ,deleteExperience ,editExperience} = ExperienceCrud()

   onMounted(()=>{
       GetAllExperiences()
   })

    return {state , GetAllExperiences , deleteExperience ,editExperience}
 }
}

</script>
<style >
    .box{
        padding: 100px 0;
        width:400px;
        text-align: center;
        background: #ddd;
        margin: 20px;
        border-radius: 20px;
        display: inline-block;

    } 
</style>
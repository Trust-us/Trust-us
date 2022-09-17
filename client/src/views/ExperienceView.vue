<template lang="">
    
    <exp_navbar/>
    <div >
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
import exp_navbar from '../components/exp_navbar.vue' 
import ExperienceCrud from '../modules/ExperienceCrud'
import {onMounted } from 'vue'

export default {
 
    components: {
    exp_navbar
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
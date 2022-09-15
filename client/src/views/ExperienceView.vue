<template lang="">
    
    <exp_navbar/>
    <div >
       <div class="box" v-for="item in state.experiences" :key="item.rate">
        <h4>{{item.name}}</h4>
        <input type="text" placeholder="name" v-model="state.ewName">
        <h4>{{item.category}}</h4>
                <input type="text" placeholder="category" v-model="state.ewCategory">
        <h4>{{item.location}}</h4>
                <input type="text" placeholder="location" v-model="state.newLocation">
        <h4>{{item.description}}</h4>
                <input type="text" placeholder="description" v-model="state.newDescription">
       <h4>{{item.rate}}</h4>
               <input type="text" placeholder="rate" v-model="state.newRate">
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
<template lang="">
    
    <exp_navbar/>
    <div >
       <div class="box" v-for="item in state.experiences" :key="item.rate">
        <h4>{{item.name}}</h4>
        <h4>{{item.category}}</h4>
        <h4>{{item.location}}</h4>
        <h4>{{item.description}}</h4>
       <h4>{{item.rate}}</h4>

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
    
const {state , GetAllExperiences} = ExperienceCrud()

   onMounted(()=>{
       GetAllExperiences()
   })

    return {state , GetAllExperiences}
 },

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
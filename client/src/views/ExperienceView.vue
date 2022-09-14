<template lang="">
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
import ExperienceCrud from '../modules/ExperienceCrud'
import {onMounted } from 'vue'

export default {
 setup() {

const {state , GetAllExperiences} = ExperienceCrud()

   onMounted(()=>{
       GetAllExperiences()
   })

    return {state , GetAllExperiences}
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
        display: inline-block;

    } 
</style>
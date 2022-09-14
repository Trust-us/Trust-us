<template lang="">
    <div>
       <div v-for="item in state.experiences" :key="item.rate">
        <h4>{{item.name}}</h4>
        <h4>{{item.category}}</h4>
        <h4>{{item.location}}</h4>
        <h4>{{item.description}}</h4>
       <h4>{{item.rate}}</h4>

       </div>
    </div>
</template>
<script>
import {reactive} from 'vue'

export default {
 setup() {
      const state = reactive({
    experiences : {}
   }) 
   function GetAll(){
    fetch("http://localhost:3000/getAll")
    .then(res=>res.json())
    .then(data=>{
        state.experiences = data
    })
   }
   GetAll()
    return {state , GetAll}
 }
}
</script>
<style lang="">
    
</style>
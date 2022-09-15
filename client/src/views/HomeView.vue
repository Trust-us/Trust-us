<template>

  <div class="home">
      <Exp_navbar/>

    <div class="box">
     <h3>hello from restaurant</h3>
     <img src=''/>
    </div>
    <div class="box">
      <h3>hello from hotel</h3>
      <img src=''/>
    </div>
    <div class="box">
     <h3>hello from experiences</h3>
     <img src=''/>
    </div>
  </div>
</template>

<script>
import Exp_navbar from '@/components/exp_navbar.vue';
// @ is an alias to /src

export default {
  name: 'HomeView',
  components: {
    Exp_navbar,
    
}
}
</script>
<style>
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
<template lang="">
<<<<<<< HEAD
    
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
=======
  <exp_navbar />
  <div>
    <div class="box" v-for="item in state.experiences" :key="item._id">
      <img v-bind:src="item.img" />
      <div>
        <h4>Name: {{ item.name }}</h4>
        <h4>Category: {{ item.category }}</h4>
        <h4>Location :{{ item.location }}</h4>
>>>>>>> db85f45ddd97b6c88f3c2b974e281aa103f7b7f7
        <div>
          <p>Description :{{ item.description }}</p>
        </div>
        <h4>Rate :{{ item.rate }}/5</h4>
      </div>

      <button type="button" class="btn" @click="editExperience(item._id)">
        Edit
      </button>
      <button type="button" class="btn" @click="deleteExperience(item._id)">
        Delete
      </button>
    </div>
  </div>
</template>
<script>
<<<<<<< HEAD
import ExperienceCrud from '../modules/ExperienceCrud'
import {onMounted } from 'vue'

export default {
 
    components: {
=======
import exp_navbar from "../components/exp_navbar.vue";
import ExperienceCrud from "../modules/ExperienceCrud";
import { onMounted } from "vue";

export default {
  components: {
    exp_navbar,
>>>>>>> db85f45ddd97b6c88f3c2b974e281aa103f7b7f7
  },
  setup() {
    const { state, GetAllExperiences, deleteExperience, editExperience } =
      ExperienceCrud();

    onMounted(() => {
      GetAllExperiences();
    });

    return { state, GetAllExperiences, deleteExperience, editExperience };
  },
};
</script>
<style>
.box {
  padding: 100px 0;
  width: 400px;
  text-align: center;
  background: #0fd34a85;
  margin: 20px;
  border-radius: 20px;
  display: inline-block;
}
.btn {
  display: inline-block;
  outline: none;
  cursor: pointer;
  font-size: 14px;
  line-height: 1;
  border-radius: 500px;
  transition-property: background-color, border-color, color, box-shadow, filter;
  transition-duration: 0.3s;
  border: 1px solid transparent;
  letter-spacing: 2px;
  min-width: 160px;
  text-transform: uppercase;
  white-space: normal;
  font-weight: 700;
  text-align: center;
  padding: 16px 14px 18px;
  color: #fff;
  background-color: #15883e;
  height: 48px;
}
.btn :hover {
  background-color: #1db9549a;
}
</style>

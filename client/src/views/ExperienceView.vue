<template lang="">
  <exp_navbar />
  <div>
    <div class="box" v-for="item in state.experiences" :key="item._id">
      <img v-bind:src="item.img" />
      <div>
        <h4>Name: {{ item.name }}</h4>
        <h4>Category: {{ item.category }}</h4>
        <h4>Location :{{ item.location }}</h4>
        <div>
          <p>Description :{{ item.description }}</p>
        </div>
        <h4>Rate :{{ item.rate }}/5</h4>
      </div>

      <button type="button" class="btn" @click="editExperience(item._id)">
        Edit <i class="fa-solid fa-pen-to-square"></i>
      </button> 
      <button type="button" class="btn" @click="deleteExperience(item._id)">
        Delete <i class="fa fa-trash" aria-hidden="true"></i>

      </button>
    </div>
  </div>
</template>
<script>
import exp_navbar from "../components/exp_navbar.vue";
import ExperienceCrud from "../modules/ExperienceCrud";
import { onMounted } from "vue";

export default {
  components: {
    exp_navbar,
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
  background: #F3F4F6;
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
  background-color: #34495E;
  height: 48px;
}
.btn :hover {
  background-color: #41B883;
}
</style>

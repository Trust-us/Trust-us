<template lang="">
  <exp_navbar />
  <div class="share">
    <div>
      <h3 style="color:blue"><b>Share your experience</b></h3>
    </div>
    <form>
      <div class="form-group">
        <label>Name</label>
        <input
          type="text"
          class="form-control"
        
          placeholder="Place name"
          v-model="post.name"
        />
      </div>
      <div class="form-group">
        <label>Description</label>
        <textarea
          type="text"
          class="form-control"
      
          placeholder="Be free ..."
          v-model="post.description"
        />
      </div>
      <div class="form-group">
        <label>Category :</label>
        <select v-model="post.category">
          <option>hotels</option>
          <option>Restaurant</option>
          <option>Others</option>
        </select>
      </div>
      <div class="form-group">
        <label>Location : </label>
        <select v-model="post.location">
          <option>Tunis</option>
          <option>Hammamt</option>
          <option>Klibiya</option>
          <option>Ghamarth</option>
        </select>
      </div>
      <div class="form-group">
        <label for="Image">Image : </label>
        <input type="file" @change="uploadFile" ref="file"  />
      </div>
      <hr />

      <div class="my-3">
        <button type="submit" class="btn btn-primary" @click="share">
          Share
        </button>
      </div>
      <div></div>
    </form>
  </div>
</template>
<script>
import axios from "axios";
import exp_navbar from "../components/exp_navbar.vue";

export default {
  name: "shareExperience",
  components: {
    exp_navbar,
  }, data() {
    return {
      post: {
        name: '',
         description: '', 
         category: '',
          location: '',
      }}}, 
      methods: {
        share() {
          let newPost = {
            name: this.post.name, description: this.post.description, category: this.post.category, location: this.post.location, img: this.post.img
          }
          console.log(newPost);
          axios.post('http://localhost:3000/share', newPost)
        }
      }
    }
  


</script>
<style>
.share {
  width: 600px;
  margin: 2%;
  display: inline-block;
  background-color: rgba(133, 129, 124, 0.137);
  border-radius: 20%;
}
</style>

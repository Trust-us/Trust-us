<template lang="">
    <div class="share" >
    <div>
      <h3 style="color:blue"><b>Share your experience</b></h3>
    </div>
    <form @submit.prevent="">
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
        <input type="file"  ref="file" multiple accept="image/*"  />
      </div>
      <img id="output" width="50" />	
      <hr />

      <div class="my-3">
        <input type="submit" class="btn btn-primary" value="Update"/>
        
      </div>
      <div></div>
    </form>
  </div>
</template>
<script>
import ExperienceCrud from '../modules/ExperienceCrud'
import {onMounted } from 'vue'
import axios from 'axios'
export default {
  name: 'UpdateView',
  setup() {

const {state} = ExperienceCrud()

   onMounted(()=>{
   })

    return {state}
 },
  data() {
    return {
      post: {

      }
    }
  },
  methods: {
    async getpost() {

      axios({
          url: `http://localhost:3000/getone/${this.$route.params.id}`,
          method: "get",

        })
        .then((response) => {
          this.post = response.data;
          console.log("resp---->", response);
        }).catch((err) => {
          console.log(err);
        });
    }
  }
}

</script>
<style lang="">
    
</style>

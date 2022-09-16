<template lang="">
  <div class="share">
    <div>
      <h3 style="color:blue"><b>Share your experience</b></h3>
    </div>
    <form v-on:submit.prevent="upload">
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
        <input type="file" @change="handlefile($event)" ref="file" multiple accept="image/*"  />
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


export default {
  name: "shareExperience",
  components: {
  },
  data() {
    return {
      post: {
        name: '',
        description: '',
        category: '',
        location: '',
        file: '',
        img: ''
      },
      fileContent : ""
    }
  },
  img: {},
  methods: {
    handlefile(event) {
      this.file = event.target.files[0]
      console.log(this.file);
      this.filesSelected = event.target.files.length
      console.log(this.file.name);
      let reader = new FileReader()


      reader.onload= () => {
      
        this.fileContent= reader.result
   
        if (this.file.name) reader.readAsDataURL(this.file)
        return this.fileContent
      }
      const data =new FormData();
      data.append('cloud_name', 'trust-us')
     data.append('upload_preset', 'lweb9fhl')
     data.append('file', reader.onload())

     console.log("data-->",data);
    
      // console.log("url--->", reader.readAsDataURL(this.file));
      
    },
    
    share() {
      
      let newPost = {
        name: this.post.name, description: this.post.description, category: this.post.category, location: this.post.location,
      }
      console.log(newPost);
      axios.post('http://localhost:3000/share', newPost);
      axios.post('https://api.cloudinary.com/v1_1/trust-us/upload');
    },
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

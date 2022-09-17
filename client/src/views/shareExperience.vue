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
        <input type="file" @change="handleFileChange($event)" ref="file" multiple accept="image/*"  />
      </div>
      <hr />

      <div class="my-3">
        <input type="submit" class="btn btn-primary" value="share"/>
        
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
        img: '',
        upload_preset:"lweb9fhl",
        file: null,
        fileContents: null,
        formData: null

      },

    }
  },

  methods: {
   
    handleFileChange: function(event) {
      console.log("handlefilechange", event.target.files);
      this.file = event.target.files[0];
      this.filesSelected = event.target.files.length;
    },
    prepareFormData: function() {
      this.formData = new FormData();
      this.formData.append("upload_preset", "lweb9fhl");
      this.formData.append("file", this.fileContents);
    },
    
    upload: function() {
    
      console.log("upload", this.file.name);
      let reader = new FileReader();
      reader.addEventListener(
        "load",
        function() {
          this.fileContents = reader.result;
          this.prepareFormData();
          let cloudinaryUploadURL = `https://api.cloudinary.com/v1_1/trust-us/upload`;
          let requestObj = {
            url: cloudinaryUploadURL,
            method: "POST",
            data: this.formData,
           
          };
          axios(requestObj)
            .then(response => {
              let results = response.data;
              console.log(results);
            })
            .catch(error => {
             console.log(error);
            })
        }.bind(this),
        false
      );
      if (this.file && this.file.name) {
        reader.readAsDataURL(this.file);
      }
    }
  }
}




</script>
<style>
.share {
  width: 600px;
  margin: 2%;
  display: inline-block;
 }
</style>
 
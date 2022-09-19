<template lang="">
  <exp_navbarVue/>
  <div class="share">
    <div>
      <h3 ><b>Share your experience</b></h3>
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
        <select v-model="post.category"  >
          <option>Hotels</option>
          <option>Restaurant</option>
          <option>Others</option>
        </select>
      </div>
      <div class="form-group">
        <label>Location : </label>
        <select v-model="post.location" selected="selected">
          <option>Tozeur</option>
          <option>Tunis</option>
          <option>Zaghouan</option>
          <option>Tataouine</option>
          <option>Nabeul</option>
          <option>Bizerte</option>
          <option>Gabès</option>
          <option>Gafsa</option>
          <option>Kairouan</option>
          <option>Kasserine</option>
          <option>Kébili</option>
          <option>Le Kef</option>
          <option>Mahdia</option>
          <option>Médenine</option>
          <option>Monastir</option>
          <option>Béja</option>
          <option>Sfax</option>
          <option>Siliana</option>
          <option>Sousse</option>
          <option>Djerba</option>
          <option>Gammarth</option>
          <option>kantaoui</option>
          <option>Klibiya</option>
          <option>kelibia</option>
          <option>hammamet </option>
        </select>
      </div>
      <div class="form-group">
        <label>Rate : </label>
        <select v-model="post.rate">
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
        </select>
      </div>
      <div class="form-group">
        <label for="Image">Image : </label>
        <input type="file" @change="handleFileChange($event)" ref="file" multiple accept="image/*"  />
      </div>
      <hr />
      <img id="output" width="50" />	
      <hr />

      <div class="my-3">
        <button type="submit" class="btn" value="share" > share <i class="fa-solid fa-share"></i></button>
        
      </div>
      <div></div>
    </form>
  </div>
</template>
<script>
import exp_navbarVue from "@/components/exp_navbar.vue";
import axios from "axios";


export default {
  name: "shareExperience",
  components: {
    exp_navbarVue
  },
  data() {

    return {
      post: {
        name: '',
        description: '',
        category: '',
        location: '',
        rate: null,
        img: '',
        public:"",
        upload_preset: "lweb9fhl",
        file: null,
        fileContents: null,
        formData: null

      },

    }
  },

  methods: {
      // uploading file from the locale to UI 
    handleFileChange: function (event) {
      console.log("handlefilechange", event.target.files);
      this.file = event.target.files[0];
      this.filesSelected = event.target.files.length;
      var image = document.getElementById('output');
      image.src = URL.createObjectURL(event.target.files[0]);
    },
    // changing the data form
    prepareFormData: function () {
      this.formData = new FormData();
      this.formData.append("upload_preset", "lweb9fhl");
      this.formData.append("file", this.fileContents);
    },
// uploading the img to the cld 
    upload: function () {
      let newPost = {
        name: this.post.name,
        category: this.post.category,
        location: this.post.location,
        description: this.post.description,
        rate: this.post.rate,
        img: this.img,
        public:this.public
      }
      console.log("upload", this.file.name);
      let reader = new FileReader();
      reader.addEventListener(
        "load",
        function () {
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
              newPost.img = response.data.secure_url
              newPost.public = response.data.public_id
     
              console.log(newPost);
              axios.post('http://localhost:3000/share', newPost)
              this.$router.push('/Experience')
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
 
<template lang="">
    <div class="share" >
    <div>
      <h3 style="color:blue"><b>Update your experience</b></h3>
    </div>
    <form @submit.prevent="Update">
      <div class="form-group">
        <label>Name</label>
        <input
          v-model="post.name"
          type="text"
          class="form-control"
         
          placeholder="Place name"
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
       <!-- <div class="form-group">
        <label for="Image">Image : </label>
        <input type="file" ref="file" multiple accept="image/*" />
      </div>
      <img id="output" width="50" />	 -->
      <hr />

      <div class="my-3">
        <input type="submit" class="btn btn-primary" value="Update"/>
        
      </div>
      <div></div>
    </form>
  </div>
 </template>
<script>
  
import axios from 'axios'


export default {

  name: 'UpdateView',
  components: {

  },


  data() {
    return {
      // Setting the state to get the id from params 
      id: this.$route.params.id,
      post: {
        name: '',
        description: '',
        category: '',
        location: '',
        rate: "",
        img: '',
      },

    }
  },

  methods: {
    //using the id to get One post info so we can sate the state with old information 
    async getone() {
      let id = this.id

      await axios.get(`http://localhost:3000/getone/${id}`)
        .then(response => {
          console.log(response);
          console.log("string", response.data);
          this.post = response.data

        })
        .catch(error => {
          console.log(error)
        })

    },
    // Updating the fields 
    async Update() {
      let id = this.id
      alert("are you sure about updating this post ")

      await axios.put(`http://localhost:3000/put/${id}`, this.post)
        .then(response => {
          console.log(response);
          console.log("string", response.data);
          return this.$router.push('/Experience')
        })
        .catch(error => {
          console.log(error)
        })
    }
  },
  beforeMount() {

    this.getone()

  },

}






</script>
<style lang="">
    
</style>

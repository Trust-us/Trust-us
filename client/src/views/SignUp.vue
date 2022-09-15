<template>
  
         <div class="wallpaper-register"></div>

         <div class="container">
            <div class="col-lg-4 col-md-6 col-sm-8 mx-auto">
               <h1>Sign Up</h1>
               <form class="form-group">
                  <input type="text" class="form-control" placeholder="username" v-model="User.username" required>
                  <input type="email" class="form-control" placeholder="Email" v-model="User.email" required>
                  <input type="password" class="form-control" placeholder="Password" v-model="User.password" required>
                  <input type="submit" class="btn btn-primary" @click="doRegister">
                  <p>Already have an account? <a href="/Signin">Sign in here</a>
                  </p>
               </form>
            </div>
         </div>
      




   
</template>
<script>

import axios from 'axios'
export default {
   name: 'SignUp',
   components: {
   },
   data() {
      return {
         User: { username: '', email: '', password: '' },
         input: {
            email: "",
            password: ""
         }
      }

   },
   methods: {
      doRegister() {
         let newUser = {
            username: this.User.username,

            email: this.User.email,
            password: this.User.password,

         }
         console.log(newUser);
         axios.post('http://localhost:3000/signup', newUser)
            .then((response) => {
               console.log(response);
            })
            .catch((error) => {
               console.log(error);
            })
      }
   }
}

</script>
<style>
   .col-lg-4{
      background-color: rgba(133, 129, 124, 0.137);
  border-radius: 20%;
    }
</style>
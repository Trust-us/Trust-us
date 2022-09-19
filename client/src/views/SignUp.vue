<template>
  
          <div class="signup">
            <div class="col-lg-4 col-md-6 col-sm-8 mx-auto">
               <h1>Inscription <i class="fa-solid fa-user"></i></h1>
               <form class="form-group"  @submit.prevent="doRegister">
                  
                  <input type="text" class="form-control" placeholder="username" v-model="User.username" required>
                  <input type="email" class="form-control" placeholder="Email" v-model="User.email" required>
                  <input type="password" class="form-control" placeholder="Password" v-model="User.password" required>
                  <input type="submit" class="btn btn-primary" value="register">
                  <p>Already have an account? <a href="/">Sign in here</a>
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
       
      }

   },
   methods: {
    async  doRegister() {
         let newUser = {
            username: this.User.username,

            email: this.User.email,
            password: this.User.password,

         }
         console.log(newUser);
        await axios.post('http://localhost:3000/signup', newUser ,{withCredentials: true })
            .then(res => {
              this.$router.push('/')
               console.log(res)
            })
            .catch((error) => {
               console.log(error);
            })
      }
   }
}

</script>
<style>
 
.signup{
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100vw;
        height: 80vh;
      }

    input[type=text], select {
    width: 100%;
    padding: 12px 20px;
    margin: 8px 0;
    display: inline-block;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
  }
  input[type=password], select {
    width: 100%;
    padding: 12px 20px;
    margin: 8px 0;
    display: inline-block;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
  }
  input[type=email], select {
    width: 100%;
    padding: 12px 20px;
    margin: 8px 0;
    display: inline-block;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
  }
   input[type=submit] {
    width: 100%;
    background-color: #34495E; 
    color: white;
    padding: 14px 20px;
    margin: 8px 0;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
   input[type=submit]:hover {
    background-color: #45a049; /* Green */
  }
  
</style>
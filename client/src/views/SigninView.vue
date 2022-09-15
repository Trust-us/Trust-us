<template >
    <div>
          <div class="col-lg-4 col-md-6 col-sm-8 mx-auto">
                  <h1>Sign In</h1>
                  <form class="form-group">
                     <input v-model="email " type="email" class="form-control" placeholder="Email" required>
                     <input v-model=" password " type="password" class="form-control" placeholder="Password" required>
                     <input type="submit" class="btn btn-primary" @click="Login">
                     <p><a href="/SignUp"> Sign up here</a>
                     </p>
                  </form>
               </div>
    </div>
</template>
<script>
import axios from 'axios'
 export default {
   name : 'SigninView' ,
   data() {
      return {
           email: '',
          password: '' }
      },
      methods:{
         async handleSubmit(){
            await axios.post('http://localhost:3000/login' , { 
               email : this.email ,
               password:this.password
               })
          .then(res=>{
            this.$cookie.set('token',res.data.token);
          })
          .catch(error=>{
            console.log(error);
          });
         }
      }

   
}
</script>
<style  >
    
</style>

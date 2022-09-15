<template >
    <div class="sign">
          <div class="col-lg-4 col-md-6 col-sm-8 mx-auto">
                  <h1>Sign In</h1>
                  <form class="form-group"   @submit.prevent="handleSubmit">
                     <input v-model="login.email" type="email" class="form-control" placeholder="Email" required>
                     <input   v-model="login.password" type="password" class="form-control" placeholder="Password" required>
                     <input type="submit" class="btn btn-primary" >
                     <p>If you dont have an account,<a href="/SignUp"> Sign up</a> here!
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
      login:{ 
          email: '',
          password: '' }
          } 
      },
      methods:{
         async handleSubmit(){
            await axios.post('http://localhost:3000/login' , this.login ,{withCredentials: true })
          .then(res=>{
             this.$router.push("/Experience")
            this.$cookie.set('token',res.data.token)
          })
          .catch(error=>{
            console.log(error);
          });
         }
      }

   
}
</script>
<style  >
    .col-lg-4{
      background-color: rgba(133, 129, 124, 0.137);
  border-radius: 20%;
    }
</style>

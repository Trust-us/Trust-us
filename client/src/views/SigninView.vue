<template >
    <div class="signin">
          <div class="col-lg-4 col-md-6 col-sm-8 mx-auto">
                  <h1>Connexion <i class="fa fa-sign-in" aria-hidden="true"></i></h1>
                  <form class="form-group"   @submit.prevent="handleSubmit">
                     <input v-model="login.email" type="email" class="form-control" placeholder="Email" required>
                     <input   v-model="login.password" type="password" class="form-control" placeholder="Password" required>
                     <input type="submit" class="btn btn-primary"  value="Connexion" >
                     <p>If you dont have an account,<a href="/SignUp"> Sign up </a> here!
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
             this.$router.push("/home")
             this.$bus.$emit('logged', 'User logged')

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
     .signin{
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100vw;
        height: 80vh;
        
      }
      
</style>

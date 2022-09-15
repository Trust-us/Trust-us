<template >
    <div class="sign">
          <div class="col-lg-4 col-md-6 col-sm-8 mx-auto">
                  <h1>Sign In</h1>
                  <form class="form-group">
                     <input v-model="email " type="email" class="form-control" placeholder="Email" required>
                     <input v-model=" password " type="password" class="form-control" placeholder="Password" required>
                     <input type="submit" class="btn btn-primary" @click="Login">
                     <p>If you dont have an account,<a href="/SignUp"> Sign up</a> here!
                     </p>
                  </form>
               </div>
    </div>
</template>
<script>
 export default {
   name : 'SigninView' ,
    
}
</script>
<style  >
    .col-lg-4{
      background-color: rgba(133, 129, 124, 0.137);
  border-radius: 20%;
    }
</style>

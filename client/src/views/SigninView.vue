<template >
    <div>
          <div class="col-lg-4 col-md-6 col-sm-8 mx-auto">
                  <h1>Sign In</h1>
                  <form class="form-group">
                     <input v-model="email " type="email" class="form-control" placeholder="Email" required>
                     <input v-model=" password " type="password" class="form-control" placeholder="Password" required>
                     <input type="submit" class="btn btn-primary" @click="Login">
                     <p><a href=""> Sign up here</a>
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
    
</style>

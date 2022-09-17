<template>

  <div class="home">

    <div class="box">
      <img src='https://media-cdn.tripadvisor.com/media/photo-s/11/56/5b/36/le-restaurant.jpg'  />
    </div>
    <div class="box">
      <img src='https://img1.picmix.com/output/pic/normal/1/0/6/4/6754601_8a8ca.gif'  />
    </div>
    <div class="box">
      <img src='https://media.safarway.com/content/0b76e818-6d34-48b0-87ef-48910788806c_sm.jpg'  />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'HomeView',
  components: {
    
}
}
</script>
<style>
 .home {
 
        display: flex;
align-content: center;   
justify-content: center;    
 padding: 100px 50px ;
  grid-gap: 10px;

}

/* Clear floats after image containers */
.box {
  
   display: flex;
}
 
img{
  border-radius: 20px;
  height: 400px;
  width: 500px;
  }

    
</style>
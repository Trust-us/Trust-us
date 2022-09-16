<template>

  <div class="home">

    <div class="box">
      <img src='https://media-cdn.tripadvisor.com/media/photo-s/11/56/5b/36/le-restaurant.jpg' style="width:100%"/>
    </div>
    <div class="box">
      <img src='https://img1.picmix.com/output/pic/normal/1/0/6/4/6754601_8a8ca.gif' style="width:100%"/>
    </div>
    <div class="box">
      <img src='https://hub.cyberesa.net/cr.fwk/images/hotels/Hotel-2925-20211120-084704.jpg' style="width:100% " />
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
/* Three image containers (use 25% for four, and 50% for two, etc) */
.home {
 
        display: flex;
        text-align: center;
        padding: 100px 50px ;

}

/* Clear floats after image containers */
.box {
   display: flex;
}
 
/* .home{display: grid}
.img{
  border-radius: 50px;
  height: 340px;
  width: 500px;
  } */

   /* .img{
        padding: 260px 0;
        width:430px;
        text-align: center;
        background: #ddd;
        margin: 20px;
        border-radius: 20px;
        display: inline-block;

    }  */
</style>
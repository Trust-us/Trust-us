<template>
  <div>
    <Exp_navbar />
    <h1 @click="this.$router.go">Explore & Discover others Opinions </h1>
 
    <div class="box" v-for="item in exp" :key="item._id">
      <h1>Hotels</h1>
      <img v-bind:src="item.img" />
      <div>
        <h4>Name: {{ item.name }}</h4>
        <h4>Category: {{ item.category }}</h4>
        <h4>Location :{{ item.location }}</h4>
        <div>
          <p>Description :{{ item.description }}</p>
        </div>
        <h4>Rate :{{ item.rate }}/5</h4>
      </div>
    </div>
    <div class="box" v-for="res in rest" :key="res._id">
      <h1>Restaurent</h1>
      <img v-bind:src="res.img" />
      <div>
        <h4>Name: {{ res.name }}</h4>
        <h4>Category: {{ res.category }}</h4>
        <h4>Location :{{ res.location }}</h4>
        <div>
          <p>Description :{{ res.description }}</p>
        </div>
        <h4>Rate :{{ res.rate }}/5</h4>
      </div>
    </div>
    <div class="box" v-for="other in others" :key="other._id">
      <h1>Others</h1>
      <img v-bind:src="other.img" />
      <div>
        <h4>Name: {{ other.name }}</h4>
        <h4>Category: {{ other.category }}</h4>
        <h4>Location :{{ other.location }}</h4>
        <div>
          <p>Description :{{ other.description }}</p>
        </div>
        <h4>Rate :{{ other.rate }}/5</h4>
      </div>
      </div>
    <div class="home">
    
      <div class="boxin">
        <h2>Restaurent :</h2>
        <img
          src="https://media-cdn.tripadvisor.com/media/photo-s/11/56/5b/36/le-restaurant.jpg"
          @click="GetRestaurant" />
      </div>
      <div class="boxin">
        <h2>hotels :</h2>

        <img
          src="https://img1.picmix.com/output/pic/normal/1/0/6/4/6754601_8a8ca.gif"
          @click="GetHotels"/>
      </div>
      <div class="boxin">
        <h2>others :</h2>

        <img
          src="https://media.safarway.com/content/0b76e818-6d34-48b0-87ef-48910788806c_sm.jpg"
        @click="GetOthers"/>
      </div>
      
    </div>
    
  </div>
  
 
</template>

<script>
import Exp_navbar from "@/components/exp_navbar.vue";
// @ is an alias to /src

export default {
  name: "HomeView",
  components: {
    Exp_navbar,
  },
  data() {
      return {
      exp:{},
      rest:{},
      others:{},
          } 
      },
      methods:{
       async GetHotels  () {
    try {
      await fetch("http://localhost:3000/hotels")
        .then((res) => res.json())
        .then((data) => {
         this.exp= data; console.log(data);
        });
    } catch (error) {
      console.log(error);
    }
  },
  
     async GetRestaurant  () {
  try {
    await fetch("http://localhost:3000/Restaurant")
      .then((res) => res.json())
      .then((data) => {
       this.rest= data; console.log(data);
      });
  } catch (error) {
    console.log(error);
  }
      },
      async GetOthers  () {
  try {
    await fetch("http://localhost:3000/Others")
      .then((res) => res.json())
      .then((data) => {
       this.others= data; console.log(data);
      });
  } catch (error) {
    console.log(error);
  }
      }
  
      }
 
 
  
   
};

</script>
<style>
  h1{
    background-color: #f1f1f1;
  }
 
 
.home {
  display: flex;
  align-content: center;
  justify-content: center;
  padding: 100px 50px;
  grid-gap: 10px;
}

/* Clear floats after image containers */
.boxin {
  display: flex;
}

img {
  border-radius: 20px;
  height: 300px;
  width: 300px;
  margin: 15px;
}
.boxin img {
  transition: 0.5s all ease-in-out;
}

.boxin:hover img {
  transform: scale(1.2);
}
footer {
  text-align: center;
  padding: 3px;
  background-color: #f1f1f1;
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
}
.box {
  padding: 100px 0;
  width: 400px;
  text-align: center;
  background: #F3F4F6;
  margin: 20px;
  border-radius: 20px;
  display: inline-block;
}
/* .span {
 margin-right: 20px;
  color: #000000;
} */
</style>

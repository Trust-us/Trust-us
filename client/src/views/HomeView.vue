<template>
  <div>
    <Exp_navbar />
    <h1 @click="this.$router.go">Explore & Discover others Opinions </h1>
 
    <div class="box" v-for="item in exp" :key="item._id">
      <h4>Hotel</h4>
      <div>
        <h1>{{ item.name }}</h1>
        <img v-bind:src="item.img" />
        <h4>Location :{{ item.location }}</h4>
        <div>
          <p>Description :{{ item.description }}</p>
        </div>
        <hr class="w3-border-grey" style="margin: auto; width: 40%" />
        <h4>Rate :{{ item.rate }}/5</h4>
      </div>
    </div>
    <div class="box" v-for="res in rest" :key="res._id">
      <h6>Restaurent</h6>
      <div>
        <h1>{{ res.name }}</h1>
        <img v-bind:src="res.img" />
        <h4>Category: {{ res.category }}</h4>
        <h4>Location :{{ res.location }}</h4>
        <div>
          <p>Description :{{ res.description }}</p><th></th>
        </div>
        <hr class="w3-border-grey" style="margin: auto; width: 40%" />
        <h4>Rate :{{ res.rate }}/5</h4>
      </div>
    </div>
    <div class="box" v-for="other in others" :key="other._id">
      <div>
        <h4>{{ other.name }}</h4>
        <img v-bind:src="other.img" />
        <h4>Location :{{ other.location }}</h4>
        <div>
          <p>Description :{{ other.description }}</p>
        </div>
        <hr class="w3-border-grey" style="margin: auto; width: 40%" />
        <h4>Rate :{{ other.rate }}/5</h4>
      </div>
      </div>
    <div class="home">
    
      <div class="boxin">
        <img class="mg"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQulSXNcjxDELHGMaPlTSRYeEZ0yriWnRqEfAMXT2IW55pwVlZhuUJq20JjoNuJiqN_ze0&usqp=CAU"
          @click="GetRestaurant" />
      </div>
      <div class="boxin">

        <img class="mg"
          src="https://thumbs.dreamstime.com/b/hotel-13341433.jpg"
          @click="GetHotels"/>
      </div>
      <div class="boxin">

        <img class="mg"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3duccYpuZ7i0gBtSJphuLEAuqotmieN_h1g&usqp=CAU"
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

.mg {
  border-radius: 08px;
  height: 350px;
  width: 450px;
  margin: 15px;
}
.boxin .mg {
  transition: 0.5s all ease-in-out;
}

.boxin:hover .mg {
  transform: scale(1.2);
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

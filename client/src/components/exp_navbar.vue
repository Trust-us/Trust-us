<template lang="">
  <div class="n">
    <nav class="topnav">
      <a class="baha">Trust-us</a>

      <router-link to="/home">Feed</router-link>
      <router-link to="/Experience">Profile <i class="fa fa-home fa-1x"></i></router-link>
      <router-link to="/share">Share <i class="fa-solid fa-share"></i></router-link>
      <router-link to="/about">About <i class="fa-solid fa-address-card"></i></router-link>
      <router-link v-on:click="Logout" to="/" style="margin-left:710px">Logout <i class="fa fa-sign-out" aria-hidden="true"></i>
</router-link>
    </nav>
    <router-view />
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "exp_navbar",
  methods: {
    //define logout function and handling the request
    async Logout() {
      await axios
        .get("http://localhost:3000/logout", { withCredentials: true })
        .then((res) => {
          console.log(res);
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>

<style>
body {
  margin: 0;
  font-family: Arial, Helvetica, sans-serif;
}

.topnav {
  overflow: hidden;
  background-color:#34495E;
}

.topnav a {
  float: left;
  color: #f2f2f2;
  text-align: center;
  padding: 1px 30px;
  text-decoration: none;
  font-size: 17px;
}

.topnav a:hover {
  background-color: #ddd;
  color: black;
}

.topnav a.active {
  background-color:#41B883;
  color: white;
}

.topnav .baha {
  color: white;
  font-family: "Brush Script MT", cursive;
}
</style>

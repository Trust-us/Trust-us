<template lang="">
  <div class="n">
    <nav class="topnav">
      <a class="baha">Trust-us</a>

      <router-link to="/home">Home</router-link>
      <router-link to="/Experience">Experience</router-link>
      <router-link to="/share">Share</router-link>
      <router-link to="/about">About</router-link>
      <router-link v-on:click="Logout" to="/">Logout</router-link>
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
  background-color: #333;
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
  background-color: #04aa6d;
  color: white;
}

.topnav .baha {
  color: white;
  font-family: "Brush Script MT", cursive;
}
</style>

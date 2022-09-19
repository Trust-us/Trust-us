<template lang="">
  <div class="body">
    <div class="bgimg w3-display-container w3-animate-opacity w3-text-white">
      <div class="w3-display-topleft w3-padding-large w3-xlarge"></div>
      <div class="w3-display-middle">
        <h1  class="w3-jumbo w3-animate-top">ABOUT US</h1>
        <hr class="w3-border-grey" style="margin: auto; width: 40%" />
        <h2 id="h2">TRUST US</h2>
        <p class="w3-large w3-center" id="p"><span class="span">Main idea</span><br>we made an app  called best plan wich it gives you the opportunity to share you experience about  hotels/restaurents/journey in beach or any awesome place to visit  with the others , ofcourse it can be the worst plan , this app give anyone the opportunity to discover tunisia and where he can fell good in his vacation or anyother day .... and it's a good + for the strangers  
        <br><span class="span">Main Features</span><br>page for user where he can share his experience , check the places with the location 2/admin: admin hotel/restaurant can post new place new suggestions for users . <br><span class="span">Technologies</span><br>frontend: vuejs+axios /backend: express.js+mongoose DB / API : cloudinary</p>
      </div>
      <div class="w3-display-bottomleft w3-padding-large"></div>
    </div><br>
    <button @click="backHome" class="btn">BACK HOME <i class="fa fa-arrow-left" aria-hidden="true"></i>
</button><br><br><br><br><br><br>
  <a  href="https://github.com/Trust-us/Trust-us" id="a"> <i class="fa-brands fa-github fa-2xl" ></i></a> <i class="fa fa-envelope fa-2xl" aria-hidden="true" ></i>  
  </div>
</template>
<script>
export default {
  name: "AboutTeam",
  components: {},
  methods: {
    backHome() {
      this.$router.push("/home");
    }
  },
};
</script>
<style lang="css">
  .btn {
  display: inline-block;
  outline: none;
  cursor: pointer;
  font-size: 14px;
  line-height: 1;
  border-radius: 500px;
  transition-property: background-color, border-color, color, box-shadow, filter;
  transition-duration: 0.3s;
  border: 1px solid transparent;
  letter-spacing: 2px;
  min-width: 160px;
  text-transform: uppercase;
  white-space: normal;
  font-weight: 700;
  text-align: center;
  padding: 16px 14px 18px;
  color: #fff;
  background-color: #34495E;
  height: 48px;
}
.btn :hover {
  background-color: #41B883;
}
.span{
  font-size: 20px;
  font-weight: bold;
  color: #41B883;
}
#p{
  margin-top: 140px;
  margin-left: 100px;
  margin-right:100px ;
}
#h2{
  margin-top: 20px;
}
#a{
  margin-top: 100px;
  font-size: 20px;
  font-weight: bold;
  color: #34495E;
}
 
 
</style>

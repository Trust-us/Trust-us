<template>
  <div>
    <Exp_navbar />
    <div class="home">
      <div class="boxin">
        <img
          src="https://media-cdn.tripadvisor.com/media/photo-s/11/56/5b/36/le-restaurant.jpg"
        />
      </div>
      <div class="boxin">
        <img
          src="https://img1.picmix.com/output/pic/normal/1/0/6/4/6754601_8a8ca.gif"
        />
      </div>
      <div class="boxin">
        <img
          src="https://media.safarway.com/content/0b76e818-6d34-48b0-87ef-48910788806c_sm.jpg"
        />
      </div>
    </div>
    <footer id="footer"><span class="span">ZIWI </span><span  class="span">BAHA </span> <span  class="span">DALY </span>Copyrigths 2022 ©️</footer>
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
};
</script>
<style>
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
#footer {
  text-align: center;
  padding: 3px;
  background-color: #f1f1f1;
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
}
.span {
 margin-right: 20px;
  color: #000000;
}
</style>

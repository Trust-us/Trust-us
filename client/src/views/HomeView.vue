<template>
  <div class="home">
    <HelloWorld msg="welcom babies " />
    <div>
      <input type="file" @change="uploadFile" ref="file">
      <button @click="submitFile">Upload!</button>
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

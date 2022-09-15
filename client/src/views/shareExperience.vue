<template lang="">
  <exp_navbar />
  <div class="share">
    <div>
      <h3 style="color:blue"><b>Share your experience</b></h3>
    </div>
    <form>
      <div class="form-group">
        <label>Name</label>
        <input
          type="text"
          class="form-control"
          v-model="Name"
          placeholder="Place name"
        />
      </div>
      <div class="form-group">
        <label>Description</label>
        <textarea
          type="text"
          class="form-control"
          v-model="Description"
          placeholder="Be free ..."
        />
      </div>
      <div class="form-group">
        <label>Category :</label>
        <select>
          <option>hotels</option>
          <option>Restaurant</option>
          <option>Others</option>
        </select>
      </div>
      <div class="form-group">
        <label>Location : </label>
        <select>
          <option>Tunis</option>
          <option>Hammamt</option>
          <option>Klibiya</option>
          <option>Ghamarth</option>
        </select>
      </div>
      <div class="form-group">
        <label for="Image">Image : </label>
        <input type="file" @change="uploadFile" ref="file" />
      </div>
      <hr />

      <div class="my-3">
        <button type="submit" class="btn btn-primary" @click="Experience">
          Share
        </button>
      </div>
      <div></div>
    </form>
  </div>
</template>
<script>
import exp_navbar from "../components/exp_navbar.vue";

export default {
  name: "shareExperience",
  components: {
    exp_navbar,
  },
};
</script>
<style>
.share {
  width: 600px;
  margin: 2%;
  display: inline-block;
  background-color: rgba(133, 129, 124, 0.137);
  border-radius: 20%;
}
</style>

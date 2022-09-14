<template lang="">
    <exp_navbar/>
    <div>
        <div>
        <h3>Share your experience</h3>
        <hr />
    </div>
    <form>
        <div class="form-group">
            <label>Name</label>
            <input type="text" class="form-control" v-model="Name" placeholder="Place name" />
        </div>
        <div class="form-group">
            <label>Category</label>
            <input type="text" class="form-control" v-model="Category" placeholder="Category"/>
        </div>
        <div class="form-group">
            <label>Location</label>
            <input type="text" class="form-control" v-model="Location" placeholder="Location..."/>
        </div>
        <div class="form-group">
            <label>Description</label>
            <textarea  type="text" class="form-control" v-model="Description" placeholder="Be free ..."/>
        </div>
         <div class="form-group">
        <label for="Image">Image : </label>
        <input type="file" @change="uploadFile" ref="file">
        </div>
        <div class ="my-3">
            <button type="submit" class="btn btn-primary"
            @click="Experience">Share</button>
        </div>
        <div>
             </div>
    </form>
    </div>
</template>
<script>
    import exp_navbar from '../components/exp_navbar.vue' 

export default {
name:'shareExperience',
components:{
exp_navbar
}
}
</script>
<style lang="js">
    
</style>
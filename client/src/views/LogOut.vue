<template>
     <div>
  <p>see you soon </p>    


    </div>
</template>
<script>
    import axios from 'axios'
export default {
    name: 'LogOut',
    components: {
       
    },
  

    
    methods: {
        async  doLogout() {
            await axios.get('http://localhost:3000/logout' ,{withCredentials: true })
                .then(res => {
                this.$router.push('/Signin')
                    console.log(res)
                })
                .catch((error) => {
                    console.log(error);
                })
        }
        }}
</script>

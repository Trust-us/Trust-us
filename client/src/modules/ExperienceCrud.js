import { ref } from "vue"

const getExperiences = () => {
    const state = ref({
        experiences : {}
       }) 

       const GetAllExperiences = async() =>{
        try{
            await  fetch("http://localhost:3000/getAll")
            .then(res=>res.json())
            .then(data=>{
                state.value.experiences = data
            })
        }
        catch(error){
          console.log(error);
        }
       }
   return {
    state,
    GetAllExperiences
   }
}
export default getExperiences
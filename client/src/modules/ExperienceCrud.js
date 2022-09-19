import { ref } from "vue";
import { useRouter } from "vue-router";

const getExperiences = () => {
  const router = useRouter();

    const state = ref({
        experiences : {}
       }) 
      

  // delete a experience post
  const deleteExperience = (_id) => {
    fetch("http://localhost:3000/delete/" + _id, { method: "DELETE" });
    window.location.reload() 
   };

  // Get experience data from backend

  const GetAllExperiences = async () => {
    try {
      await fetch("http://localhost:3000/getAll")
        .then((res) => res.json())
        .then((data) => {
          state.value.experiences = data;
        });
    } catch (error) {
      console.log(error);
    }
  };
  
 


// edit experience data from backend

   
    async function editExperience(_id) {
      router.push({
        name: 'Update',
        params: {
          id: _id,
        },
      })
    }
//exporting functions globally
   return {
    state,
    GetAllExperiences,
    deleteExperience,
    editExperience,
  };
};
export default getExperiences;

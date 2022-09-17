import { ref } from "vue"




const getExperiences = () => {
    const state = ref({
        newName:'',
        newCategory:'',
        newLocation:'',
        newDescription:'',
        newRate:'',
        showinput :false,
        experiences : {}
       }) 
      

// delete a experience post 
const deleteExperience = (_id) => {
    fetch("http://localhost:3000/delete/" + _id, { method: "DELETE"})
    location.reload();
     
  }

// Get experience data from backend

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
    //    update an experience post 
    const editExperience = (_id) => { 
        const requestOptions = {
          method: "PUT",
         
          }
          fetch("http://localhost:3000/put/" + _id ,requestOptions )
          .then(res =>res.body)
          .then(res =>{console.log(res)})
        }
    // const editExperience = (_id) => { 
    //     const requestOptions = {
    //       method: "PUT",
    //       headers: {
    //         "Content-Type": "application/json"
    //         // "auth-token": state.token
    //       },
    //       body: JSON.stringify({
    //         name: state.value.name,
    //         category: state.value.category,
    //         location:state.value.location,
    //         description: state.value.description,
    //         rate: state.value.rate,
    //       }) 
    //     }
    //     fetch("http://localhost:3000/put/" + todoId.value, 
    //     requestOptions)
    //      // .then(GetAllTodos())
    //       .then(res =>  res.body ) // redundant
    //       .then(res => {console.log(res)}) // redundant
    //       router.push('/todos')
    //   }

   return {
    state,
    GetAllExperiences,
    deleteExperience,
    editExperience,
    }
}
export default getExperiences
const Experience =require ("../Models/experience")

const shareExperience= async(req,res)=>{
    console.log("req---->",req.body);
    await Experience.create(req.body)
    res.status(201).json({msg:"Post added successfully"})
}
const getAllExperience= async(req,res)=>{
    try{
    const experiences= await Experience.find()
    res.status(200).json(experiences)
}catch(error){
    console.log(error);
    res.status(400).json("error");
}
}
module.exports={shareExperience,getAllExperience}
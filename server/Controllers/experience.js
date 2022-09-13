const Experience =require ("../Models/experience")

const shareExperience= async(req,res)=>{
    console.log("req---->",req.body);
    await Experience.create(req.body)
    res.status(201).json({msg:"Post added successfully"})
}

module.exports={shareExperience}
const Experience = require("../Models/experience");
//post an experience
const shareExperience = async (req, res) => {
  try {
    console.log("req---->", req.body);
    await Experience.create(req.body);
    res.status(201).json({ msg: "Post added successfully" });
  } catch (error) {
    console.log(error);
    res.status(400).json({ msg: "error can not add experience" });
  }
};
//delete experience
const deleteExp = async (req, res) => {
  try {
    console.log("reqParam---->", req.params);
    await Experience.deleteOne({ _id: req.params.id });
    res.status(201).json({ message: "Post deleted successfully" });
  } catch (error) {
    console.log(error);
    res.status(400).json({ msg: "deletion failed" });
  }
};

module.exports = { shareExperience, deleteExp };

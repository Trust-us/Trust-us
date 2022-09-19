const Experience = require("../Models/experience");

const {
  removeFromCloudinary,
  updateImg,
  sendToCloudinary,
} = require("../API/cloudinary");
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
    console.log(res);

    const baha = await Experience.findById({ _id: req.params.id });
    const publicId = baha.public;
    console.log("p_id--->", publicId);
    await removeFromCloudinary(publicId);
    await Experience.deleteOne({ _id: req.params.id });
    res.status(201).json({ message: "Post deleted successfully" });
  } catch (error) {
    console.log(error);
    res.status(400).json({ msg: "deletion failed" });
  }
};

//get all experience
const getAllExperience = async (req, res) => {
  try {
    const experiences = await Experience.find();
    res.status(200).json(experiences);
  } catch (error) {
    console.log(error);
    res.status(400).json("error");
  }
};

//update the post shared
const updateExp = async (req, res) => {
  try {
    // const baha = await Experience.findById({ _id: req.params.id });
    // const publicId = baha.public;
    // console.log("p_id--->", publicId);
    // await removeFromCloudinary(publicId);
    // const res = await sendToCloudinary(.....)

    await Experience.findOneAndUpdate({ _id: req.params.id }, req.body);

    res.status(201).json({ message: "Post updated successfully" });
  } catch (error) {
    console.log(error);
    res.status(400).json({ msg: "update failed" });
  }
};

//filtering postes by categories and locations

const filter = async (req, res) => {
  try {
    const experience = await Experience.find({
      category: req.body.category,
      location: req.body.location,
    });
    console.log(experience);
    return res.send(experience);
  } catch (error) {
    console.log(error);
    res.status(400).json({ msg: "error" });
  }
};
//filtering postes by restaurent categorie

const filterbyHotels = async (req, res) => {
  try {
    const experience = await Experience.find({ category: "Hotels" });
    console.log(experience);
    return res.send(experience);
  } catch (error) {
    console.log(error);
    res.status(400).json({ msg: "error" });
  }
};
//filtering postes by Others categorie

const filterbyOthers = async (req, res) => {
  try {
    const experience = await Experience.find({ category: "Others" });
    console.log(experience);
    return res.send(experience);
  } catch (error) {
    console.log(error);
    res.status(400).json({ msg: "error" });
  }
};
//filtering postes by restaurent categorie

const filterbyRestaurent = async (req, res) => {
  try {
    const experience = await Experience.find({ category: "Restaurant" });
    console.log(experience);
    return res.send(experience);
  } catch (error) {
    console.log(error);
    res.status(400).json({ msg: "error" });
  }
};
//get one post
const getone = async (req, res) => {
  try {
    const { id } = req.params;
    const experience = await Experience.findById(id);
    if (!experience) return;
    res.status(200).json(experience);
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  shareExperience,
  getAllExperience,
  deleteExp,
  updateExp,
  filter,
  getone,
  filterbyHotels,
  filterbyOthers,
  filterbyRestaurent,
};

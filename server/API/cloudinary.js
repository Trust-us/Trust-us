const cloudinary = require('cloudinary').v2
const dotenv = require("dotenv");
dotenv.config();
require("dotenv").config();
//CLD Config
cloudinary.config({
  cloud_name:'trust-us',
  api_key: 636717224412268,
  api_secret:'AvwHCkHR34Xv4GqjKBw2oGgnNME',
});
//Uploqding img to CLD
sendToCloudinary = (path, data) => {
  return cloudinary.v2.uploader.upload(path, {
      data
  }).then((data) => {
      return { url: data.url};
  }).catch((error) => {
      console.log(error)
  })
}
//  delete img from the CLD 
removeFromCloudinary = async (public_id) => {
  await cloudinary.uploader.destroy(public_id, function (error, result) {
      console.log("result API--->",result)
      console.log("err--->api", error)
  })
}
module.exports = { sendToCloudinary, removeFromCloudinary }

const cloudinary = require('cloudinary').v2
const dotenv = require("dotenv");
dotenv.config();

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});
sendToCloudinary = (path, data) => {
  return cloudinary.v2.uploader.upload(path, {
      data
  }).then((data) => {
      return { url: data.url};
  }).catch((error) => {
      console.log(error)
  })
}

removeFromCloudinary = async (url) => {
  await cloudinary.v2.uploader.destroy(url, function (error, result) {
      console.log(result, error)
  })
}
module.exports = { sendToCloudinary, removeFromCloudinary }

import sharp from "sharp";

const resizeAndStoreImage = (image: Express.Multer.File, fileName: string) => {
  sharp(image.buffer)
    .resize({ width: 360 })
    .toFile(`images/${fileName}`)
    .then((data) => console.log(data))
    .catch((err) => console.log(err));
};

export default {
  uploadImage: (image: Express.Multer.File) => {
    const fileExtension =
      image.originalname.split(".")[image.originalname.split(".").length - 1]; // Getting file extension by splitting on extesion dot(.)
    const fileName = new Date().toISOString() + "." + fileExtension; // Creating a new file name with new Date() and fileExtension
    // const imagePath = "/images/owners/" + fileName; // Setting the public path

    resizeAndStoreImage(image, fileName);
  },
};

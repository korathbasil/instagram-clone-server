import sharp from "sharp";

const resizeAndStoreImage = async (
  image: Express.Multer.File,
  fileName: string
) => {
  return await sharp(image.buffer)
    .resize({ width: 360 })
    .toFile(`storage/images/${fileName}`)
    .then(() => true)
    .catch(() => false);
};

export default {
  uploadImage: async (image: Express.Multer.File) => {
    const fileExtension =
      image.originalname.split(".")[image.originalname.split(".").length - 1]; // Getting file extension by splitting on extesion dot(.)
    const fileName = new Date().toISOString() + "." + fileExtension; // Creating a new file name with new Date() and fileExtension
    // const imagePath = "/images/owners/" + fileName; // Setting the public path

    const isImageUploadSuccess = await resizeAndStoreImage(image, fileName);

    if (!isImageUploadSuccess) return undefined;

    return fileName;
  },
};

import sharp from "sharp";

const resizeAndStoreImage = (image: Express.Multer.File, fileName: string) => {
  return sharp(image.buffer)
    .resize({ width: 360 })
    .toFile(`public/images/${fileName}`)
    .then(() => `public/images/${fileName}`)
    .catch(() => undefined);
};

export default {
  uploadImage: async (image: Express.Multer.File) => {
    const fileExtension =
      image.originalname.split(".")[image.originalname.split(".").length - 1]; // Getting file extension by splitting on extesion dot(.)
    const fileName = new Date().toISOString() + "." + fileExtension; // Creating a new file name with new Date() and fileExtension
    // const imagePath = "/images/owners/" + fileName; // Setting the public path

    const imageUrl = await resizeAndStoreImage(image, fileName);

    if (!imageUrl) return undefined;

    return imageUrl;
  },
};

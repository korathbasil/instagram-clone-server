import { fileHelper } from "../helpers";

export default {
  getImageByFileName: (filename: string) => {
    return new Promise((resolve, reject) => {
      fileHelper
        .getImageByFileName(filename)
        .then((image) => resolve(image))
        .catch((err) => reject(err));
    });
  },
};

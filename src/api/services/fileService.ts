import { rejects } from "assert";
import { fileHelper } from "../helpers";

export default {
  getImageByPath: (filename: string) => {
    return new Promise((resolve, reject) => {
      fileHelper
        .getImageByFilename(filename)
        .then((image) => resolve(image))
        .catch((err) => rejects(err));
    });
  },
};

import { readFile } from "fs";

export default {
  getImageByFilename: async (filename: string) => {
    return new Promise((resolve, reject) => {
      const filenameWithPath = process.env.PWD + "/public/images/" + filename;

      return readFile(filenameWithPath, (err, data) => {
        if (err) return reject(new Error(err.message));

        return resolve(data);
      });
    });
  },
};

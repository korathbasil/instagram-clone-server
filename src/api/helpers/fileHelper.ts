import { readFile } from "fs";

export default {
  getImageByFilename: async (filename: string) => {
    return new Promise((resolve, reject) => {
      return readFile(filename, (err, data) => {
        if (err) return reject(new Error(err.message));

        return resolve(data);
      });
    });
  },
};

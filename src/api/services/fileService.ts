import { readFile } from "fs";

export default {
  getImageByPath: async (filenameWithPath: string) => {
    return new Promise((resolve, reject) => {
      return readFile(filenameWithPath, (err, data) => {
        console.log(err?.message);
        if (err) return reject(new Error(err.message));
        return resolve(data);
      });
    });
  },
};

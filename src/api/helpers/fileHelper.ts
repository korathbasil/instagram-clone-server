import { readFile } from "fs";

export default {
  getImageByFileName: async (fileName: string) => {
    return new Promise((resolve, reject) => {
      const fileNameWithPath = process.env.PWD + "/storage/images/" + fileName;

      return readFile(fileNameWithPath, (err, data) => {
        if (err) return reject(new Error(err.message));

        return resolve(data);
      });
    });
  },
};

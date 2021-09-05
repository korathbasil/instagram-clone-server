import { readFile } from "fs";

export default {
  getImageById: async (filenameWithPath: string) => {
    return new Promise((resolve, reject) => {
      return readFile(filenameWithPath, (err, data) => {
        if (err) return new Error(err.message);
        return data;
      });
    });
  },
};

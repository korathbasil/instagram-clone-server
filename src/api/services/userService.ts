import { User } from "../models";

import { IUserInput } from "../interfaces";

export default {
  createUser: (userDetails: IUserInput) => {
    return new Promise(async (resolve, reject) => {
      try {
        const user = User.create(userDetails);
        await user.encryptPassword();
        await user.save();

        return resolve(user.dumpUser());
      } catch (err) {
        return reject(new Error("Cannot perform action"));
      }
    });
  },

  loginUser: (email: string, password: string) => {
    return new Promise(async (resolve, reject) => {
      const user = await User.findOne({ email });

      if (!user) return reject(new Error("User not found"));

      const isPasswordCorrect = await user.isPasswordCorrect(password);
      if (!isPasswordCorrect) return reject(new Error("Incorrect password"));

      resolve(user.dumpUser());
    });
  },
};

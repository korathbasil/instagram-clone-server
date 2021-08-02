import { User } from "../models";

import { IuserInput } from "../interfaces";

export default {
  createUser: (userDetails: IuserInput) => {
    return new Promise(async (resolve, reject) => {
      try {
        const user = User.create(userDetails);
        await user.encryptPassword();
        await user.save();
        const { password, ...rest } = user;
        return resolve(rest);
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

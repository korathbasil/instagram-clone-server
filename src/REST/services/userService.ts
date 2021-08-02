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
};

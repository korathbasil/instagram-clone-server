import { User, Follow } from "../models";

import { IUserInput } from "../interfaces";

export default {
  createUser: (userDetails: IUserInput) => {
    return new Promise(async (resolve, reject) => {
      try {
        const user = User.create(userDetails);
        await user.encryptPassword();
        await user.save();

        return resolve(user.dumpUserWithToken());
      } catch (err) {
        console.error(err);
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

      resolve(user.dumpUserWithToken());
    });
  },

  sendFollowRequest: (targetUserId: number, user_id: number) => {
    return new Promise<number>(async (resolve, reject) => {
      const user = await User.findOne({ id: user_id });
      if (!user) return reject("User not found");

      const targetUser = await User.findOne({ id: targetUserId });
      if (!targetUser) return reject("User not found");

      const newFollowRequest = Follow.create({ user, targetUser });
      await newFollowRequest.save();
      return resolve(newFollowRequest.id);
    });
  },
};

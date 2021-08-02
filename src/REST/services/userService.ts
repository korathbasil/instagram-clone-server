import { User } from "../models";

export default {
  createUser: async () => {
    const user = User.create({ displayName: "User", password: "qwqwqw" });
    await user.save();
  },
};

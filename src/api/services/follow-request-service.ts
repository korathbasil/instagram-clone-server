import { User, Follow } from "../models";

export class FollowRequestService {
  public static async sendFollowRequest(targetUserId: number, user_id: number) {
    return new Promise<number>(async (resolve, reject) => {
      const user = await User.findOne({ id: user_id });
      if (!user) return reject("User not found");

      const targetUser = await User.findOne({ id: targetUserId });
      if (!targetUser) return reject("User not found");

      const newFollowRequest = Follow.create({ user, targetUser });
      await newFollowRequest.save();
      return resolve(newFollowRequest.id);
    });
  }

  public static async acceptFollowRequest(reqId: number, user_id: number) {
    return new Promise(async (resolve, reject) => {
      const followReq = await Follow.findOne({ id: reqId });
      console.log(followReq?.user);
      if (followReq?.targetUser.id !== user_id)
        return reject("can't perform action");
      if (!followReq) return reject("can't perform action");

      followReq.accepted = true;

      await followReq.save();
      return resolve(true);
    });
  }
}

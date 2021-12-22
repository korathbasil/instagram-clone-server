import { Request, Response } from "express";

import { userService, FollowRequestService } from "../services";

export default {
  userSignup: (req: Request, res: Response) => {
    const { email, name, username, password } = req.body;
    const userDetails = { email, name, username, password };

    userService
      .createUser(userDetails)
      .then((user) => {
        res.status(201).json({ succes: true, user });
      })
      .catch((err) =>
        res.status(409).json({ success: false, err: err.message })
      );
  },

  userLogin: (req: Request, res: Response) => {
    const { email, password } = req.body;

    userService
      .loginUser(email, password)
      .then((user) => res.status(200).json({ success: true, user }))
      .catch((err) =>
        res.status(403).json({ success: false, err: err.message })
      );
  },

  sendFollowRequest: async (req: Request, res: Response) => {
    const targetUserId = parseInt(req.body.userId);
    const userId = req.user.id;

    const followReqId = await FollowRequestService.sendFollowRequest(
      targetUserId,
      userId
    );

    res.send({ id: followReqId });
  },
};

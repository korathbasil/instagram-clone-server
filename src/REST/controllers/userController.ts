import { Request, Response } from "express";

import { userService } from "../services";

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
};

import { Request, Response } from "express";
import { SimpleConsoleLogger } from "typeorm";

import { postService } from "../services";

export default {
  getPosts: (req: Request, res: Response) => {
    const user_id = req.user.id;

    postService
      .getPosts(user_id)
      .then((posts) => res.status(200).json({ success: true, posts }))
      .catch((err) =>
        res.status(403).json({ success: false, err: err.message })
      );
  },

  createPost: (req: Request, res: Response) => {
    // const { caption } = req.body;
    // const user_id = req.user.id;

    const caption = "dswdsd";
    const user_id = 4;

    const image = req.file!;

    postService
      .createPost(image, caption, user_id)
      .then((post) => res.status(201).json({ success: true, post }))
      .catch((err) =>
        res.status(409).json({ success: false, err: err.message })
      );
  },
};

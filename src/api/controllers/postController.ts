import { Request, Response } from "express";

import { postService } from "../services";

export default {
  createPost: (req: Request, res: Response) => {
    const { image, caption, user_id } = req.body;
    const postDetails = {
      image,
      caption,
    };

    postService
      .createPost(postDetails, user_id)
      .then((post) => res.status(201).json({ success: true, post }))
      .catch((err) =>
        res.status(409).json({ success: false, err: err.message })
      );
  },
};

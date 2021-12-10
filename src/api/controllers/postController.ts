import { Request, Response } from "express";

import { postService } from "../services";
import { PostService } from "../services/postService";

export class PostController {
  public static async getAllPosts(req: Request, res: Response) {
    const user_id = req.user.id;

    const posts = await PostService.getAllPosts(user_id);

    if (!posts)
      return res.status(403).json({ success: false, err: "Cannot get posts" });

    return res.status(200).json({ success: true, posts });
  }

  public static createPost(req: Request, res: Response) {
    const { caption } = req.body;
    const user_id = req.user.id;
    const imageFile = req.file!;

    PostService.createPost(imageFile, caption, user_id)
      .then((post) => res.status(201).json({ success: true, post }))
      .catch((err) =>
        res.status(409).json({ success: false, err: err.message })
      );
  }
}

export default {
  likePost: (req: Request, res: Response) => {
    const postId = parseInt(req.params.post_id);
    const userId = req.user.id;

    postService
      .likePost(postId, userId)
      .then((type) => res.status(201).json({ success: true, type }))
      .catch((err) =>
        res.status(400).json({ success: false, error: err.message })
      );
  },

  commentPost: (req: Request, res: Response) => {
    const postId = parseInt(req.params.post_id);
    const userId = req.user.id;
    const commentBody = req.body.body;

    postService
      .commentPost(postId, userId, commentBody)
      .then((commentId) =>
        res.status(201).json({ success: true, comment_id: commentId })
      )
      .catch((err) =>
        res.status(400).json({ success: false, message: err.message })
      );
  },
};

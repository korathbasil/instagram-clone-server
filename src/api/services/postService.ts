import { Post } from "../models";

import { IPostInput } from "../interfaces";

export default {
  createPost: (postDetails: IPostInput) => {
    return new Promise(async (resolve, reject) => {
      try {
        const post = Post.create(postDetails);
        await post.save();
        resolve(post);
      } catch (err) {
        reject(new Error("Cant add post"));
      }
    });
  },
};

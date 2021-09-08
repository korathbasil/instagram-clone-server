import { User, Post, Like } from "../models";

import { postHelper } from "../helpers";

export default {
  getPosts: (user_id: number) => {
    return new Promise(async (resolve, reject) => {
      const posts = await Post.find({ where: { user: user_id } });

      if (!posts) return reject(new Error("Cannot find posts"));

      return resolve(posts);
    });
  },

  createPost: (
    imageFile: Express.Multer.File,
    caption: string,
    user_id: number
  ) => {
    return new Promise(async (resolve, reject) => {
      const image = await postHelper.uploadImage(imageFile);

      if (!image) return reject(new Error("Cannot upload image"));

      const user = await User.findOne({ id: user_id });
      if (!user) return reject(new Error("Action not allowed"));

      try {
        const post = Post.create({ image, caption, user });
        await post.save();
        return resolve(post.dumpPost());
      } catch (err) {
        return reject(new Error("Can't add post"));
      }
    });
  },

  likePost: (post_id: number, user_id: number) => {
    return new Promise(async (resolve, reject) => {
      const post = await Post.findOne({ id: post_id });

      if (!post) return reject(new Error("Invalid post id"));

      const like = await Like.findOne({ post, user: user_id });

      if (like) {
        await like.remove();
        return resolve("UNLIKE");
      }

      const newLike = Like.create({ post, user: user_id });
      try {
        await newLike.save();
        return resolve("LIKE");
      } catch (err) {
        return reject(new Error("Can't perform action"));
      }
    });
  },
};

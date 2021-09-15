import {
  Entity,
  BaseEntity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  JoinColumn,
  OneToMany,
} from "typeorm";

import User from "./UserModel";
import Like from "./LikeModel";
import Comment from "./CommentModel";

@Entity("posts")
class Post extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => User, (user) => user.posts)
  @JoinColumn({ name: "user_id" })
  user: User;

  @Column({
    type: "varchar",
    length: 300,
    default: "",
  })
  caption: string;

  @Column()
  image: string;

  // Likes
  @Column({ default: 0 })
  likes_count: number;

  @OneToMany(() => Like, (like) => like.post)
  likes: Like[];

  // Comment
  @Column({ default: 0 })
  comments_count: number;

  @OneToMany(() => Comment, (comment) => comment.post)
  comments: Comment[];

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  dumpPost() {
    return {
      ...this,
      user: this.user.id,
    };
  }
}

export default Post;

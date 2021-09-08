import {
  Entity,
  BaseEntity,
  Column,
  PrimaryGeneratedColumn,
  JoinColumn,
  ManyToOne,
} from "typeorm";

import Post from "./PostModel";

@Entity("likes")
class Like extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Post, (post) => post.likes)
  @JoinColumn({ name: "post_id" })
  post: Post;

  @Column()
  user: number;
}

export default Like;

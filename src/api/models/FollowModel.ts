import {
  BaseEntity,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryColumn,
} from "typeorm";

import User from "./UserModel";

@Entity("follow")
class Follow extends BaseEntity {
  @PrimaryColumn()
  @ManyToOne(() => User, (user) => user.following)
  @JoinColumn({ name: "following_user_id" })
  following: User;

  @PrimaryColumn()
  @ManyToOne(() => User, (user) => user.followers)
  @JoinColumn({ name: "following_user_id" })
  followed: User;
}

export default Follow;

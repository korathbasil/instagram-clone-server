import {
  Entity,
  BaseEntity,
  PrimaryGeneratedColumn,
  JoinColumn,
  ManyToOne,
  Column,
} from "typeorm";

import User from "./UserModel";

@Entity("follows")
class Follow extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => User, (user) => user.following)
  @JoinColumn({ name: "user_id" })
  user: User;

  @ManyToOne(() => User, (user) => user.followers)
  @JoinColumn({ name: "target_user_id" })
  targetUser: User;

  @Column({ default: false })
  accepted: boolean;
}

export default Follow;

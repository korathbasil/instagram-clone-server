import {
  Entity,
  Column,
  BaseEntity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
} from "typeorm";

import { hashPassword, comparePasswords } from "../helpers";
import { jwtHelper } from "../helpers";

import Post from "./PostModel";

@Entity("users")
class User extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    type: "varchar",
    length: 255,
    default: "",
  })
  profile_picture: string;

  @Column({
    type: "varchar",
    length: 255,
    default: "",
  })
  cover_picture: string;

  @Column({
    type: "varchar",
    length: 255,
  })
  name: string;

  @Column({
    type: "varchar",
    length: 255,
    unique: true,
  })
  username: string;

  @Column({
    type: "varchar",
    length: 255,
  })
  email: string;

  @Column({
    type: "varchar",
    length: 255,
  })
  password: string;

  @Column({
    type: "varchar",
    length: 10,
    nullable: true,
    enum: ["male", "female", "other"],
  })
  gender: string;

  @Column({
    type: "varchar",
    length: 255,
    default: "",
  })
  bio: string;

  @Column({ default: false })
  isActive: boolean;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  // Post
  @OneToMany(() => Post, (post) => post.user)
  posts: Post[];

  async encryptPassword() {
    const hashedPassword = await hashPassword(this.password);
    this.password = hashedPassword;
  }

  async isPasswordCorrect(password: string) {
    return comparePasswords(password, this.password);
  }

  signToken() {
    const payload = { id: this.id, name: this.name, username: this.username };
    return jwtHelper.signToken(payload);
  }

  dumpUser() {
    const { password, ...rest } = this;
    return rest;
  }
}

export default User;

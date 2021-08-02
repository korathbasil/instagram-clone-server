import { Entity, Column, BaseEntity, PrimaryGeneratedColumn } from "typeorm";

import { hashPassword } from "../helpers";

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

  async encryptPassword() {
    const hashedPassword = await hashPassword(this.password);
    this.password = hashedPassword;
  }
}

export default User;

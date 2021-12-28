import {
  Entity,
  BaseEntity,
  PrimaryGeneratedColumn,
  OneToMany,
  ManyToOne,
  JoinColumn,
  Column,
} from "typeorm";
import { UserChat } from ".";
import { Message } from "./Message.model";

import User from "./UserModel";

@Entity("chat")
export class Chat extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    nullable: true,
    type: "varchar",
    length: 50,
  })
  name: string;

  @OneToMany(() => UserChat, (uc) => uc.user)
  userConnection: User[]; // Promise

  @ManyToOne(() => Message, (message) => message.chat)
  @JoinColumn({ name: "message_id" })
  messages: Message[];
}

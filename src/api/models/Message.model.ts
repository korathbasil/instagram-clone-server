import {
  Entity,
  BaseEntity,
  PrimaryGeneratedColumn,
  JoinColumn,
  ManyToOne,
} from "typeorm";
import { Chat } from "./Chat.model";

import User from "./UserModel";

@Entity("messages")
export class Message extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  body: string;

  @ManyToOne(() => User, (user) => user.messagesSent)
  @JoinColumn({ name: "sender_id" })
  sender: User;

  @ManyToOne(() => Chat, (chat) => chat.messages)
  @JoinColumn({ name: "chat_id" })
  chat: Chat;
}

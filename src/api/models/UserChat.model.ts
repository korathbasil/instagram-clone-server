import {
  Entity,
  BaseEntity,
  PrimaryColumn,
  JoinColumn,
  ManyToOne,
} from "typeorm";

import { Chat } from "./Chat.model";
import User from "./UserModel";

@Entity("user_chat")
export class UserChat extends BaseEntity {
  @PrimaryColumn()
  chat_id: number;

  @PrimaryColumn()
  user_id: number;

  @ManyToOne(() => Chat, (chat) => chat.parties)
  @JoinColumn({ name: "chat_id" })
  chat: User;

  @ManyToOne(() => User, (user) => user.chats)
  @JoinColumn({ name: "user_id" })
  user: User;
}

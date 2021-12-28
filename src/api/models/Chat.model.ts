import {
  Entity,
  BaseEntity,
  PrimaryGeneratedColumn,
  OneToMany,
  ManyToOne,
  JoinColumn,
} from "typeorm";
import { Message } from "./Message.model";

import User from "./UserModel";

@Entity("chat")
export class Chat extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  name: string;

  @OneToMany(() => User, (user) => user.chats)
  parties: User[];

  @ManyToOne(() => Message, (message) => message.chat)
  @JoinColumn({ name: "message_id" })
  messages: Message[];
}

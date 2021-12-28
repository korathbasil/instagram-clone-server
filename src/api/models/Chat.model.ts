import {
  Entity,
  BaseEntity,
  PrimaryGeneratedColumn,
  OneToMany,
  ManyToOne,
  JoinColumn,
} from "typeorm";
import { UserChat } from ".";
import { Message } from "./Message.model";

import User from "./UserModel";

@Entity("chat")
export class Chat extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  name: string;

  @OneToMany(() => UserChat, (uc) => uc.user)
  parties: User[];

  @ManyToOne(() => Message, (message) => message.chat)
  @JoinColumn({ name: "message_id" })
  messages: Message[];
}

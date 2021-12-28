import { Chat } from "../models";

export class ChatService {
  public static async createChat() {
    const chat = Chat.create({ name: "Hello" });
    return chat.save();
  }
}

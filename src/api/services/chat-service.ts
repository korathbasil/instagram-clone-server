import { Chat, UserChat } from "../models";

export class ChatService {
  public static async createChat(userId: number) {
    const chat = Chat.create({ name: "Hello" });
    await chat.save();

    const userChat = UserChat.create({ chat_id: chat.id, user_id: userId });
    return userChat.save();
  }
}

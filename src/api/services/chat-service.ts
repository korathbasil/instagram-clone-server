import { Chat, UserChat } from "../models";

export class ChatService {
  public static async createChat(userId: number, secondUserId: number) {
    const chat = Chat.create({ name: "Hello" });
    await chat.save();

    const userChat = UserChat.create({ chat_id: chat.id, user_id: userId });
    await userChat.save();

    const secondUserChat = UserChat.create({
      chat_id: userChat.chat_id,
      user_id: secondUserId,
    });
    await secondUserChat.save();
  }
}

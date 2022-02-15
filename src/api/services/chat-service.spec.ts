import { expect } from "chai";
import { ChatService } from "./chat-service";
import { User } from "../models";

describe("Chat Service", () => {
  const user1details = {
    name: "James Bond",
    email: "james@email.com",
    username: "jamesbond007",
    password: "iamjamesbond",
  };
  const user2details = {
    name: "John Cena",
    email: "john@email.com",
    username: "johncena",
    password: "iamjohncena",
  };
  describe("createChat", () => {
    it("creates a chat", async () => {
      const user1 = User.create(user1details);
      await user1.save();

      const user2 = await User.create(user2details);
      await user2.save();

      const chat = await ChatService.createChat(user1.id, user2.id);

      expect(typeof chat).equal("object");
    });
  });
});

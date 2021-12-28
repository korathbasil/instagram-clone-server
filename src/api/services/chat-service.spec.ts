import { expect } from "chai";
import { ChatService } from "./chat-service";
import { User } from "../models";

describe("Chat Service", () => {
  describe("createChat", () => {
    it("creates a chat", async () => {
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

      const user1 = User.create(user1details);
      await user1.save();

      const user2 = await User.create(user2details);
      await user2.save();

      const chat = await ChatService.createChat();
      console.log(chat);

      expect(typeof chat).equal("string");
    });
  });
});

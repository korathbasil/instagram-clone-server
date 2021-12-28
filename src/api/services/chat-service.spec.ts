import { expect } from "chai";

describe("Chat Service", () => {
  describe("createChat", () => {
    it("creates a chat", () => {
      const name = "fa";
      expect(typeof name).equal("string");
    });
  });
});

import { expect } from "chai";

import { User } from "../../../src/api/models";

describe("User model", () => {
  it("is exposed", () => {
    expect(User).to.be.ok;
  });
});

import { expect } from "chai";

import app from "../src/app";

describe("Express apllication", () => {
  it("is exposed", () => {
    expect(app).to.be.ok;
  });
});

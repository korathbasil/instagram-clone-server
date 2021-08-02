"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var chai_1 = require("chai");
var app_1 = __importDefault(require("../src/app"));
describe("Express apllication", function () {
    it("is exposed", function () {
        chai_1.expect(app_1.default).to.be.ok;
    });
});

import { IPayload } from "../../src/api/interfaces";

declare global {
  namespace Express {
    interface Request {
      user: IPayload;
    }
  }
}

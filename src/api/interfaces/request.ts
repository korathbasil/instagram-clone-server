import { Request } from "express";

import { IPayload } from "./jwt";

export interface IRequest extends Request {
  user: IPayload;
}

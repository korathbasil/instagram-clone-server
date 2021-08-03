import { sign } from "jsonwebtoken";

import { JWT_SECRET } from "../../config/constants";

import { IPayload } from "../interfaces";

export default {
  signToken: (payload: IPayload) => {
    return sign(payload, JWT_SECRET);
  },
};

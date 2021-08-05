import { sign, verify } from "jsonwebtoken";

import { JWT_SECRET } from "../../config/constants";

import { IPayload } from "../interfaces";

export default {
  signToken: (payload: IPayload) => {
    return sign(payload, JWT_SECRET);
  },

  verifyToken: (token: string) => {
    return new Promise((resolve, reject) => {
      try {
        const payload = verify(token, JWT_SECRET);
        return resolve(payload);
      } catch (err) {
        return reject(err.message);
      }
    });
  },
};

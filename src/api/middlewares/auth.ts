import { Request, Response, NextFunction } from "express";

import { jwtHelper } from "../helpers";

import { IPayload, IRequest } from "../interfaces";

export const isAuthenticated = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const token = req.header("Authorization")?.split(" ")[1];

  if (!token)
    return res.status(403).json({ success: false, err: "Unauthorized access" });

  jwtHelper
    .verifyToken(token)
    .then((payload) => {
      req.user = payload as IPayload;
      return next();
    })
    .catch((err) => res.status(403).json({ success: false, err }));

  //   req.user = payload as IPayload;

  //   return next();
};

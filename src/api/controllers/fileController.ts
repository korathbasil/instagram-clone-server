import { Request, Response } from "express";

export default {
  getImage: (req: Request, res: Response) => {
    console.log(req, res);
  },
};

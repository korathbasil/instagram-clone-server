import { Request, Response } from "express";

import { fileService } from "../services";

export default {
  getImage: (req: Request, res: Response) => {
    const filename = req.params.filename;

    fileService
      .getImageByPath(filename)
      .then((image) => {
        res.header("Content-Type", "image/png").send(image);
      })
      .catch((err) => res.json({ success: false, err }));
  },
};

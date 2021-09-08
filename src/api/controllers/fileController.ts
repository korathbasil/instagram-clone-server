import { Request, Response } from "express";

import { fileService } from "../services";

export default {
  getImage: (req: Request, res: Response) => {
    const fileName = req.params.filename;

    fileService
      .getImageByFileName(fileName)
      .then((image) => {
        res.header("Content-Type", "image/png").send(image);
      })
      .catch((err) => res.json({ success: false, err }));
  },
};

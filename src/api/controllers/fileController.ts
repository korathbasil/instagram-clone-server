import { Request, Response } from "express";

import { fileService } from "../services";

export default {
  getImage: (req: Request, res: Response) => {
    const filename = req.params.filename;

    const filenameWithPath =
      "/home/korathbasil/Desktop/instagram-clone-server/public/images/" +
      filename;

    fileService
      .getImageByPath(filenameWithPath)
      .then((image) => {
        res.header("Content-Type", "image/png").send(image);
      })
      .catch((err) => res.json({ success: false, err }));
  },
};

import { NextApiRequest, NextApiResponse } from "next";

export default (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "POST") {
    return res.status(200).json(req.body);
  } else if (req.method === "GET") {
    return res.status(200).json({ count: 3 });
  }
};

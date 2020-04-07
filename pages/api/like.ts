import { NextApiRequest, NextApiResponse } from "next";
import Airtable from "airtable";

const base = new Airtable({ apiKey: process.env.AIRTABLE_API_KEY }).base(
  "appkGytGCnonFdj2R"
);

export default async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const id = req.query.id;
    base("Contenu").find(id, function page(err, record) {
      if (err) {
        res.status(500).json({ error: "err" });
      }
      const r = record.fields;
      const likes = +r.likes;
      const newLikes =
        req.query.unlike === "true" ? Math.max(likes - 1, 0) : likes + 1;
      base("Contenu").update(
        [{ id, fields: { likes: newLikes } }],
        (err, records) => {
          if (err) {
            res.status(500).json({ error: "err" });
          }
          res.status(200).json({ records });
        }
      );
    });
  } catch (error) {
    res.status(500).json({});
  }
};

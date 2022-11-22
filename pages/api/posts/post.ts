// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

import dbConnect from "../../../lib/dbConnect";
import Post from "../../../models/Post";

type Data = {
  name: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { id } = req.body;
  await dbConnect();

  const post: any = await Post.findOne({
    _id: id,
  });

  res.status(200).send(post);
}

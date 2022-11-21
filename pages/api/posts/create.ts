// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

import dbConnect from "../../../lib/dbConnect";
import Post from "../../../models/Post";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { title, content } = req.body;

  if (!title || !content) {
    return res.status(400).send("Missing required fields");
  }

  await dbConnect();

  try {
    const post = new Post({
      title,
      content,
    });

    await post.save();

    res.status(201).send("Post created");
  } catch (error: any) {
    res.status(400).send(error.message);
  }
}

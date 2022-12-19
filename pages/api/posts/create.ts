// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { withIronSessionApiRoute } from "iron-session/next";
import type { NextApiRequest, NextApiResponse } from "next";
import { ironOptions } from "../../../lib/config";

import dbConnect from "../../../lib/dbConnect";
import Post from "../../../models/Post";

// This is where we specify the typings of req.session.*
declare module "iron-session" {
  interface IronSessionData {
    isLoggedIn?: any;
  }
}

export default withIronSessionApiRoute(handler, ironOptions);

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { title, content } = req.body;
  const { isLoggedIn } = req?.session || null;

  if (!isLoggedIn) {
    return res.status(401).send("Not logged in");
  }

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

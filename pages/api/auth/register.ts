// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

import dbConnect from "../../../lib/dbConnect";
import User from "../../../models/User";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).send("Please add all the fields");
  }

  await dbConnect();

  const isUserExist = await User.findOne({ email });

  if (isUserExist) {
    return res.status(400).send("User already exists");
  }

  const newUser = new User({
    email,
    password,
  });
  await newUser.save();

  res.status(200).json("User created successfully");
}

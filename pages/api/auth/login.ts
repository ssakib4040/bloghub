import { withIronSessionApiRoute } from "iron-session/next";
import { ironOptions } from "../../../lib/config";
import User from "../../../models/User";

export default withIronSessionApiRoute(loginRoute, ironOptions);

async function loginRoute(req: any, res: any) {
  const { email, password } = req.body;

  if (!email || !password) {
    res.status(400).send("Missing email or password");
    return;
  }

  const user = await User.findOne({ email });

  if (!user) {
    res.status(400).send("User not found");
    return;
  }

  if (user.password !== password) {
    res.status(400).send("Wrong password");
    return;
  }

  // get user from database then:
  req.session.isLoggedIn = {
    email: user.email,
    password: user.password,
  };

  await req.session.save();
  res.send("Logged in");
}

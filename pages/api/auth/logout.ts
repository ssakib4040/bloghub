import { withIronSessionApiRoute } from "iron-session/next";
import { ironOptions } from "../../../lib/config";

export default withIronSessionApiRoute(logoutRoute, ironOptions);

function logoutRoute(req: any, res: any) {
  req.session.destroy();
  res.send({ ok: true });
}

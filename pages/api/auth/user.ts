import { withIronSessionApiRoute } from "iron-session/next";
import { ironOptions } from "../../../lib/config";

export default withIronSessionApiRoute(userRoute, ironOptions);

function userRoute(req: any, res: any) {
  res.send(req?.session);
}

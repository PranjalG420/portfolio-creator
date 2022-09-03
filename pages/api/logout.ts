// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    res.setHeader("Set-Cookie", `user=0; Max-Age=-1; Path=/;`);
    res.status(201).redirect("/");
}

// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
// import fs from "fs";

import { compare } from "bcrypt";
import { PrismaClient } from "@prisma/client";
// import path from "path";

// const pathDB = path.join(process.cwd(), "db.json");
// const users = JSON.parse(fs.readFileSync(pathDB));
export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    if (req.method == "POST") {
        try {
            const prisma = new PrismaClient();
            const user = await prisma.user.findUnique({
                where: {
                    username: req.body.user,
                },
            });
            if (user && (await compare(req.body.password, user.password))) {
                console.log("suc");
                res.setHeader(
                    "Set-Cookie",
                    `user=${user.username}; Max-Age=60000; Path=/;`
                );
                res.status(201).redirect("/");
            } else {
                console.log("fail");
            }
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: "Internal Server Error" });
        }
    } else {
        res.status(400).json({ error: "Bad Request" });
    }
}

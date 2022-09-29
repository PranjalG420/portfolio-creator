import type { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient, Theme } from "@prisma/client";
import { hash } from "bcrypt";

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    if (req.method == "POST") {
        const prisma = new PrismaClient();
        const hashPassword = await hash(req.body.password, 10);
        const user = await prisma.user.findUnique({
            where: { email: req.body.user },
        });
        if (!user) {
            const user = await prisma.user.create({
                data: {
                    name: req.body.name,
                    password: hashPassword,
                    email: req.body.user,
                    theme: Theme.DARK,
                    image: "https://kfg6bckb.media.zestyio.com/default-avatar.png",
                },
            });
            res.redirect("/login");
        } else {
            res.status(401).json({ error: "User already exists" });
        }
    } else {
        res.status(400).json({ error: "Bad Request" });
    }
}

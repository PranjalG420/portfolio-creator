// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";
import { hash } from "bcrypt";

// import fs from "fs";

// import path from "path";

// const pathDB = path.join(process.cwd(), "db.json");
// const users = JSON.parse(fs.readFileSync(pathDB, { encoding: "utf8" }));

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    if (req.method == "POST") {
        const prisma = new PrismaClient();
        const hashPassword = await hash(req.body.password, 10);
        const user = await prisma.user.create({
            data: {
                name: req.body.name,
                password: hashPassword,
                username: req.body.user,
                theme: req.body.theme || "white",
            },
        });
        // users[req.body.user] = {
        //     name: req.body.name,
        //     theme: req.body.theme ?? "white",
        //     password: hashPassword,
        // };
        // fs.writeFileSync(pathDB, JSON.stringify(users, null, 2), {
        //     encoding: "utf8",
        // });
        res.status(201).json({ success: true });
    } else {
        res.status(400).json({ error: "Bad Request" });
    }
}

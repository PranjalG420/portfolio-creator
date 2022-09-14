import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";
import CredentialsProvider from "next-auth/providers/credentials";
import { PrismaClient } from "@prisma/client";
import { compare } from "bcrypt";

export default NextAuth({
    // Configure one or more authentication providers
    callbacks: {
        async redirect({ url, baseUrl }) {
            return baseUrl;
        },
    },

    providers: [
        GithubProvider({
            clientId: process.env.GITHUB_ID,
            clientSecret: process.env.GITHUB_SECRET,
        }),
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                username: {
                    label: "email",
                    type: "text",
                    placeholder: "name@email.com",
                },
                password: { label: "Password", type: "password" },
            },
            async authorize(credentials, req) {
                const prisma = new PrismaClient();
                const user = await prisma.user.findUnique({
                    where: { email: req.body.username },
                });
                if (user && (await compare(req.body.password, user.password))) {
                    const { name, email } = user;
                    return { name, theme: "white", email };
                }
                return null; //Return null if user data could not be verified
            },
        }),
    ],
});

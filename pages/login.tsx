import { GetServerSideProps } from "next";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";

export default function email() {
    const [user, setUser] = useState("");
    const [password, setPassword] = useState("");
    const [state, setState] = useState(true);
    const router = useRouter();
    const handleSend = async () => {
        try {
            setState(false);
            await fetch("/api/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    user: user,
                    password: password,
                }),
            });
            router.push("/");
        } catch (error) {
            console.log(error);
        }
    };
    return (
        <>
            <h1>LOGIN</h1>
            {state ? (
                <form onSubmit={handleSend}>
                    <div>
                        <input
                            type="text"
                            placeholder="user-login"
                            onChange={(e) => {
                                setUser(e.target.value);
                            }}
                        ></input>
                    </div>
                    <div>
                        <input
                            type="password"
                            placeholder="pass-login"
                            onChange={(e) => {
                                setPassword(e.target.value);
                            }}
                        ></input>
                    </div>
                    <button type="submit">Submit</button>
                </form>
            ) : (
                "Thanks for Submitting!"
            )}
            <a href="register">Register page</a>
        </>
    );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
    const user = context.req.cookies.user ?? null;
    console.log(user);
    if (user) {
        return {
            redirect: {
                destination: "/",
                permanent: false,
            },
        };
    }

    return {
        props: { user },
    };
};

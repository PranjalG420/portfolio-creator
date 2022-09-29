import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";

export default function Register() {
    const [user, setUser] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const router = useRouter();

    const handleSend = async () => {
        try {
            console.log("Success");
            await fetch("/api/register", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    name: name,
                    user: user,
                    password: password,
                }),
            });
            router.push("/login");
        } catch (error) {
            console.log(error);
        }
    };
    return (
        <>
            <div className="flex justify-around">
                <form
                    onSubmit={handleSend}
                    className="text-xl flex flex-col items-center mt-10 rounded-2xl p-10 md:px-20 md:py-[60px] bg-zinc-900"
                >
                    <label className="text-xl md:text-3xl font-bold">
                        Register
                    </label>
                    <div>
                        <input
                            type="text"
                            placeholder="Name"
                            className="px-2 py-1 rounded border-4 mt-5 text-sm md:text-xl"
                            onChange={(e) => {
                                setName(e.target.value);
                            }}
                        ></input>
                    </div>
                    <div>
                        <input
                            type="text"
                            placeholder="Username"
                            className="px-2 py-1 rounded border-4 mt-5 text-sm md:text-xl"
                            onChange={(e) => {
                                setUser(e.target.value);
                            }}
                        ></input>
                    </div>
                    <div>
                        <input
                            type="password"
                            placeholder="Password"
                            className="px-2 py-1 rounded border-4 my-5 text-sm md:text-xl"
                            onChange={(e) => {
                                setPassword(e.target.value);
                            }}
                        ></input>
                    </div>
                    <button
                        type="submit"
                        className="text-sm md:text-2xl px-4 py-2 bg-blue-700 font-semibold rounded hover:bg-slate-300 hover:text-black transition-colors"
                    >
                        Submit
                    </button>
                    <label className="text-sm md:text-xl text-neutral-600 italic mt-5">
                        Already have an account? Sign in{" "}
                        <a
                            href="/login"
                            className="text-blue-500 transition-colors "
                        >
                            here
                        </a>
                        {"."}
                    </label>
                </form>
            </div>
        </>
    );
}

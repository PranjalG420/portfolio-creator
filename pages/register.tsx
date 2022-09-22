import React, { useState, useEffect } from "react";

export default function Register() {
    const [user, setUser] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [theme, setTheme] = useState("");
    const handleSend = async () => {
        try {
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
        } catch (error) {
            console.log(error);
        }
    };
    return (
        <>
            <div className="flex justify-around md:text-xs mx-60">
                <form
                    onSubmit={handleSend}
                    className="text-xl flex flex-col items-center mt-10 rounded-2xl px-20 py-[60px] bg-zinc-900"
                >
                    <label className="text-3xl font-bold">Register</label>
                    <div>
                        <input
                            type="text"
                            placeholder="Name"
                            className="px-2 py-1 rounded border-4 mt-5"
                            onChange={(e) => {
                                setName(e.target.value);
                            }}
                        ></input>
                    </div>
                    <div>
                        <input
                            type="text"
                            placeholder="Username"
                            className="px-2 py-1 rounded border-4 mt-5"
                            onChange={(e) => {
                                setUser(e.target.value);
                            }}
                        ></input>
                    </div>
                    <div>
                        <input
                            type="password"
                            placeholder="Password"
                            className="px-2 py-1 rounded border-4 mt-5"
                            onChange={(e) => {
                                setPassword(e.target.value);
                            }}
                        ></input>
                    </div>
                    <button
                        type="submit"
                        className="px-4 py-2 bg-blue-700 font-semibold rounded hover:bg-slate-300 hover:text-black transition-colors my-5"
                    >
                        Submit
                    </button>
                    <label className="text-xl text-neutral-600 italic">
                        Already have an account? Sign in{" "}
                        <a
                            href="/login"
                            className="hover:text-blue-500 transition-colors underline"
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

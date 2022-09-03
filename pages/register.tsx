import React, { useState, useEffect } from "react";

export default function Register() {
    const [user, setUser] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [theme, setTheme] = useState("");
    const [state, setState] = useState(true);
    const handleSend = async () => {
        try {
            setState(false);
            await fetch("/api/register", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    name: name,
                    user: user,
                    password: password,
                    theme: theme,
                }),
            });
        } catch (error) {
            console.log(error);
        }
    };
    return (
        <>
            <h1>Register</h1>
            {state ? (
                <form onSubmit={handleSend}>
                    <div>
                        <input
                            type="text"
                            placeholder="name"
                            onChange={(e) => {
                                setName(e.target.value);
                            }}
                        ></input>
                    </div>
                    <div>
                        <select
                            defaultValue="white"
                            name="pets"
                            onChange={(e) => {
                                setTheme(e.target.value);
                            }}
                        >
                            <option disabled>
                                --Please choose an option--
                            </option>
                            <option value="white">White</option>
                            <option value="black">Black</option>
                        </select>
                    </div>
                    <div>
                        <input
                            type="text"
                            placeholder="user"
                            onChange={(e) => {
                                setUser(e.target.value);
                            }}
                        ></input>
                    </div>
                    <div>
                        <input
                            type="password"
                            placeholder="pass"
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
            <a href="/login">Login page</a>
        </>
    );
}

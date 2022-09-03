import React from "react";
import Cookies from "js-cookie";

export default function navbar(props) {
    const user: string | null = Cookies.get("user") || props.user || null;
    console.log(500, Cookies.get("user"), props.user);
    if (user) {
        return (
            <p>
                {user} | <a href="/api/logout">logout</a>
            </p>
        );
    } else {
        return (
            <p>
                <a href="register">Register</a> | <a href="login">Login</a>
            </p>
        );
    }
}

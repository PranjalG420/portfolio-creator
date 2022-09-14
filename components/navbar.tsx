import React, { useState } from "react";
import { useSession, signIn, signOut } from "next-auth/react";
import { json } from "stream/consumers";
import { Settings } from "react-feather";

export default function navbar(props) {
    const { data: session } = useSession();

    return (
        <div className="bg-neutral-900 p-5 sticky top-0 right-0 left-0 flex justify-between items-center font-semibold md:text-xl font-sans">
            <div className="ml-3">
                <a
                    href="/"
                    className="px-4 py-2 bg-blue-700 rounded hover:bg-slate-300 hover:text-black transition-colors"
                >
                    Home
                </a>
            </div>

            {(session && (
                //This displays when logged in
                <div className="mr-3 flex space-x-5 items-center">
                    <a href="/settings">
                        <Settings strokeWidth={2} size={20} />
                    </a>
                    <p>{session.user.name}</p>
                    <button onClick={() => signOut()}>Sign out</button>
                </div>
            )) || (
                //This displays when not logged in
                <div className="mr-3">
                    <a href="/login" className="mr-7">
                        Sign in
                    </a>
                    <a href="/register">Register</a>
                </div>
            )}
        </div>
    );
}

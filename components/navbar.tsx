import React, { useState } from "react";
import { useSession, signIn, signOut } from "next-auth/react";
import { json } from "stream/consumers";
import { Settings, LogIn, Home, Sun, Book, Edit, LogOut } from "react-feather";

export default function navbar(props) {
    const { data: session } = useSession();

    return (
        <div className="drop-shadow-xl z-20 px-5 min-h-[75px] sticky top-0 right-0 left-0 flex justify-between items-center font-semibold md:text-xl">
            <div className="flex justify-between">
                <a
                    href="/"
                    className="px-4 py-2 rounded hover:bg-slate-300 hover:text-black transition-colors ml-10"
                >
                    <Home strokeWidth={3} size={30} />
                </a>
                <a
                    href="/posts/react"
                    className="px-4 py-2 rounded hover:bg-slate-300 hover:text-black transition-colors ml-5"
                >
                    <Edit strokeWidth={3} size={30} />
                </a>
                <a
                    href="/about"
                    className="px-4 py-2 rounded hover:bg-slate-300 hover:text-black transition-colors ml-5"
                >
                    <Book strokeWidth={3} size={30} />
                </a>
            </div>
            <div className="flex justify-between">
                {(session && (
                    //This displays when logged in
                    <div className="flex items-center">
                        <p className="px-4 py-2 border-4 rounded">
                            {session.user.name}
                        </p>
                        <button className="px-4 py-2 rounded hover:bg-slate-300 hover:text-black transition-colors ml-5">
                            <Sun strokeWidth={3} size={30} />
                        </button>

                        <a
                            href="/settings"
                            className="px-4 py-2 rounded hover:bg-slate-300 hover:text-black transition-colors ml-5"
                        >
                            <Settings strokeWidth={3} size={30} />
                        </a>
                        <button
                            onClick={() => signOut()}
                            className="px-4 py-2 rounded hover:bg-slate-300 hover:text-black transition-colors mr-10 ml-5 "
                        >
                            <LogOut strokeWidth={3} size={30} />
                        </button>
                    </div>
                )) || (
                    //This displays when not logged in
                    <a
                        href="/login"
                        className="px-4 py-2 rounded hover:bg-slate-300 hover:text-black transition-colors mr-10 ml-5 "
                    >
                        <LogIn strokeWidth={3} size={30} />
                    </a>
                )}
            </div>
        </div>
    );
}

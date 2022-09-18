import React, { useState } from "react";
import { useSession, signIn, signOut } from "next-auth/react";
import { json } from "stream/consumers";
import { Settings, LogIn, Home, Sun, Book, Edit } from "react-feather";

export default function navbar(props) {
    const { data: session } = useSession();
    const [logged, setLogged] = useState(true);
    function loggedIn() {
        setLogged(!logged);
    }

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
                    href="/"
                    className="px-4 py-2 rounded hover:bg-slate-300 hover:text-black transition-colors ml-5"
                >
                    <Edit strokeWidth={3} size={30} />
                </a>
                <a
                    href="/"
                    className="px-4 py-2 rounded hover:bg-slate-300 hover:text-black transition-colors ml-5"
                >
                    <Book strokeWidth={3} size={30} />
                </a>
            </div>

            <div className="flex justify-between">
                {(session && (
                    //This displays when logged in
                    <div className="flex items-center">
                        <p className="px-4 py-2">{session.user.name}</p>
                        <button onClick={loggedIn}>
                            <Settings strokeWidth={2} size={20} />
                        </button>
                        <div
                            className={
                                logged
                                    ? "hidden"
                                    : "top-[80px] fixed right-[25px] flex-col flex bg-neutral-900 rounded-md shadow-md"
                            }
                        >
                            <p></p>
                            <a
                                href="/settings"
                                className="px-4 py-2 rounded hover:bg-slate-300 hover:text-black transition-colors "
                            >
                                Settings
                            </a>
                            <button
                                onClick={() => signOut()}
                                className="px-4 py-2 rounded hover:bg-slate-300 hover:text-black transition-colors"
                            >
                                Sign out
                            </button>
                        </div>
                    </div>
                )) || (
                    //This displays when not logged in
                    <>
                        <button className="px-4 py-2 rounded hover:bg-slate-300 hover:text-black transition-colors ">
                            <Sun strokeWidth={3} size={30} />
                        </button>
                        <a
                            href="/login"
                            className="px-4 py-2 rounded hover:bg-slate-300 hover:text-black transition-colors mr-10 ml-5 "
                        >
                            <LogIn strokeWidth={3} size={30} />
                        </a>
                    </>
                )}
            </div>
        </div>
    );
}

import React, { useState } from "react";
import { useSession, signIn, signOut } from "next-auth/react";
import { json } from "stream/consumers";
import { ArrowDownCircle } from "react-feather";

export default function navbar(props) {
    const { data: session } = useSession();
    const [logged, setLogged] = useState(true);
    function loggedIn() {
        setLogged(!logged);
    }

    return (
        <div className="bg-neutral-900 px-5 min-h-[75px] sticky top-0 right-0 left-0 flex justify-between items-center font-semibold md:text-xl">
            <a
                href="/"
                className="px-4 py-2 bg-blue-700 rounded hover:bg-slate-300 hover:text-black transition-colors"
            >
                Home
            </a>
            <div className="flex justify-between">
                {/* <a
                    href="/"
                    className="px-4 py-2 rounded hover:bg-slate-300 hover:text-black transition-colors"
                >
                    About
                </a>
                <a
                    href="/"
                    className="px-4 py-2 rounded hover:bg-slate-300 hover:text-black transition-colors"
                >
                    Contact
                </a> */}
                {(session && (
                    //This displays when logged in
                    <div className="flex items-center">
                        <p className="px-4 py-2">{session.user.name}</p>
                        <button onClick={loggedIn}>
                            <ArrowDownCircle strokeWidth={2} size={20} />
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
                        <a
                            href="/login"
                            className="px-4 py-2 rounded hover:bg-slate-300 hover:text-black transition-colors"
                        >
                            Sign in
                        </a>
                        <a
                            href="/register"
                            className="px-4 py-2 rounded hover:bg-slate-300 hover:text-black transition-colors"
                        >
                            Register
                        </a>
                    </>
                )}
            </div>
        </div>
    );
}

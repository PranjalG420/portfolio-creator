import React, { useState } from "react";
import { useSession, signIn, signOut } from "next-auth/react";
import { json } from "stream/consumers";
import {
    Settings,
    LogIn,
    Home,
    Sun,
    Book,
    Edit,
    LogOut,
    Menu,
    X,
} from "react-feather";

export default function navbar(props) {
    const { data: session, status } = useSession();
    const [hamburger, setHamburger] = useState(true);
    function switchHamburger() {
        setHamburger(!hamburger);
    }
    return (
        <div className="z-20 min-h-[75px] sticky top-0 right-0 left-0 flex justify-between items-center font-semibold md:text-xl">
            <div className="flex justify-between">
                <a
                    href="/"
                    className="px-4 py-2 rounded hover:bg-slate-300 hover:text-black transition-colors md:ml-10"
                >
                    <Home strokeWidth={3} size={30} />
                </a>
            </div>
            <div>
                <button
                    className="px-4 py-2 rounded md:hidden"
                    onClick={switchHamburger}
                >
                    {hamburger ? (
                        <Menu strokeWidth={3} size={30} />
                    ) : (
                        <X strokeWidth={3} size={30} />
                    )}
                </button>
            </div>
            <div
                className={
                    `fixed top-[60px] md:top-5 flex flex-col md:flex md:flex-row md:justify-between transition-all md:right-0 ` +
                    (hamburger ? "right-[-100%]" : "right-0")
                }
            >
                <a
                    href="/posts/react"
                    className="px-4 py-2 flex flex-row items-center justify-end rounded hover:bg-slate-300 hover:text-black transition-colors md:ml-5"
                >
                    <p className="mr-5 px-2 py-1 bg-white rounded text-black md:hidden">
                        Posts
                    </p>
                    <Edit strokeWidth={3} size={30} />
                </a>
                <a
                    href="/about"
                    className="px-4 py-2 rounded flex flex-row justify-end items-center hover:bg-slate-300 hover:text-black transition-colors md:ml-5"
                >
                    <p className="mr-5 px-2 py-1 bg-white rounded text-black md:hidden">
                        About
                    </p>
                    <Book strokeWidth={3} size={30} />
                </a>
                {(session && (
                    //This displays when logged in
                    <div className="flex items-center flex-col md:flex-row">
                        {/* <p className="px-4 py-2">
                            |{session.user.image}| - user
                        </p> */}
                        <button className="px-4 py-2 rounded flex flex-row items-center hover:bg-slate-300 hover:text-black transition-colors md:ml-5">
                            <p className="mr-5 px-2 py-1 bg-white rounded text-black md:hidden">
                                Themes
                            </p>
                            <Sun strokeWidth={3} size={30} />
                        </button>
                        <div>
                            <a
                                href="/settings"
                                className="px-4 py-2 rounded flex flex-row items-center justify-end hover:bg-slate-300 hover:text-black transition-colors md:ml-5"
                            >
                                <p className="mr-5 px-2 py-1 bg-white rounded text-black md:hidden">
                                    Settings
                                </p>
                                <Settings strokeWidth={3} size={30} />
                            </a>
                        </div>
                        <button
                            onClick={() => signOut()}
                            className="px-4 py-2 rounded flex flex-row items-center justify-end hover:bg-slate-300 hover:text-black transition-colors md:mr-10 md:ml-5 "
                        >
                            <p className="mr-5 px-2 py-1 bg-white rounded text-black md:hidden">
                                Log Out
                            </p>
                            <LogOut strokeWidth={3} size={30} />
                        </button>
                    </div>
                )) || (
                    //This displays when not logged in
                    <a
                        href="/login"
                        className="px-4 py-2 rounded flex flex-row items-center justify-end hover:bg-slate-300 hover:text-black transition-colors md:mr-10 md:ml-5"
                    >
                        <p className="mr-5 px-2 py-1 bg-white rounded text-black md:hidden">
                            Log In
                        </p>
                        <LogIn strokeWidth={3} size={30} />
                    </a>
                )}
            </div>
        </div>
    );
}

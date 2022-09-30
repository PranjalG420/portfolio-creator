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
    // const [menu, setMenu] = useState(true);
    // function showMenu() {
    //     setMenu(!menu);
    // }

    return (
        <div className="z-20 min-h-[75px] sticky top-0 right-0 left-0 flex justify-between items-center font-semibold md:text-xl opacity-75 bg-zinc-900 md:bg-transparent md:animate-navLoad">
            <div className="flex justify-between">
                <a
                    href="/"
                    className="px-4 py-2 rounded opacity-100 hover:bg-slate-300 hover:text-black transition-colors md:ml-10"
                >
                    <Home
                        strokeWidth={3}
                        size={300}
                        className="w-6 h-6 md:w-8 md:h-8"
                    />
                </a>
                <a
                    href="/posts/react"
                    className="px-4 py-2 rounded opacity-100 hover:bg-slate-300 hover:text-black transition-colors md:ml-5"
                >
                    <Edit
                        strokeWidth={3}
                        size={300}
                        className="w-6 h-6 md:w-8 md:h-8"
                    />
                </a>
                <a
                    href="/about"
                    className="px-4 py-2 rounded opacity-100 hover:bg-slate-300 hover:text-black transition-colors md:ml-5"
                >
                    <Book
                        strokeWidth={3}
                        size={300}
                        className="w-6 h-6 md:w-8 md:h-8"
                    />
                </a>
            </div>
            <div className="md:mr-14 mr-4 mt-2">
                {(session && (
                    // This displays when logged in
                    <>
                        <a href="/user/dashboard">
                            <img
                                src={session.user.image}
                                className="max-h-8 md:max-h-10 rounded-[50%] opacity-100 "
                                alt="user_image"
                            ></img>
                        </a>
                        {/* <div
                            className={
                                `fixed top-[60px] flex flex-col align-middle transition-all bg-neutral-700 rounded-md ` +
                                (menu ? "right-[-100%]" : "right-0")
                            }
                        >
                            <a
                                href="/settings"
                                className="px-4 py-2 rounded text-left hover:bg-slate-300 hover:text-black transition-colors"
                            >
                                Settings
                            </a>
                            <button
                                onClick={() => signOut()}
                                className="px-4 py-2 text-left rounded hover:bg-slate-300 hover:text-black transition-colors "
                            >
                                Sign Out
                            </button>
                        </div> */}
                    </>
                )) || (
                    <>
                        <a
                            href="/login"
                            className="px-4 py-2 rounded flex hover:bg-slate-300 hover:text-black transition-colors md:mr-10"
                        >
                            <LogIn
                                strokeWidth={3}
                                size={300}
                                className="w-6 h-6 md:w-8 md:h-8 opacity-100 "
                            />
                        </a>
                    </>
                )}
            </div>
            {/* 
            <div
            // className={
            //     `fixed top-[60px] md:top-5 flex flex-col md:flex md:flex-row md:justify-between transition-all md:right-0 ` +
            //     (hamburger ? "right-[-100%]" : "right-0")
            // }
            >
                {(session && (
                    //This displays when logged in
                    <>
                        <div className="flex items-center flex-col">
                            <div>
                                <a
                                    href="/settings"
                                    className="px-4 py-2 rounded fixed  flex-col items-center justify-end hover:bg-slate-300 hover:text-black transition-colors md:ml-5"
                                >
                                    Settings
                                </a>
                            </div>
                            <button
                                onClick={() => signOut()}
                                className="px-4 py-2 rounded flex flex-row items-center justify-end hover:bg-slate-300 hover:text-black transition-colors md:mr-10 md:ml-5 "
                            >
                                Sign Out
                            </button>
                        </div>
                    </>
                )) || (
                    //This displays when not logged in
                    
                )}
            </div> */}
        </div>
    );
}

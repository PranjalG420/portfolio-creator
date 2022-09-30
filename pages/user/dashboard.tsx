import React from "react";
import { useSession, signIn, signOut } from "next-auth/react";
import { json } from "stream/consumers";
import { Settings, LogOut, FilePlus } from "react-feather";

const block_style =
    "p-10 mb-5 mx-10 text-2xl md:text-4xl font-semibold bg-zinc-700 rounded-xl flex flex-col items-center md:min-w-max ";

export default function dashboard() {
    const { data: session, status } = useSession();
    return (
        <>
            <div className="flex flex-col items-center mx-10">
                <h1 className="text-3xl md:text-5xl mt-10 ">Dashboard</h1>
                {(session && (
                    <>
                        <h1 className="text-sm md:text-4xl my-5 ">
                            Logged in as:{" "}
                            <span className="italic">{session.user.name}</span>
                        </h1>
                        <div className="flex md:flex-row flex-col justify-center">
                            <div className={block_style}>
                                <p>Settings</p>
                                <a
                                    href="/settings"
                                    className="rounded-[50%] p-5 flex mt-5 bg-zinc-900 hover:bg-slate-300 hover:text-black transition-colors"
                                >
                                    <Settings
                                        strokeWidth={2}
                                        size={300}
                                        className="w-14 h-14 md:w-28 md:h-28 animate-spin "
                                    />
                                </a>
                            </div>
                            <div className={block_style}>
                                <p>Portfolio</p>
                                <a
                                    href="/settings"
                                    className="rounded-[50%] p-5 flex mt-5 bg-zinc-900 hover:bg-slate-300 hover:text-black transition-colors"
                                >
                                    <FilePlus
                                        strokeWidth={2}
                                        size={300}
                                        className="w-14 h-14 md:w-28 md:h-28 animate-pulse"
                                    />
                                </a>
                            </div>
                            <div className={block_style}>
                                <p>Sign Out</p>
                                <button
                                    onClick={() => signOut()}
                                    className="px-4 py-2 text-left rounded "
                                >
                                    <a
                                        href="/settings"
                                        className="rounded-[50%] p-5 flex mt-5 bg-zinc-900 hover:bg-slate-300 hover:text-black transition-colors"
                                    >
                                        <LogOut
                                            strokeWidth={2}
                                            size={300}
                                            className="w-14 h-14 md:w-28 md:h-28 animate-pulse"
                                        />
                                    </a>
                                </button>
                            </div>
                        </div>
                    </>
                )) || (
                    <>
                        <div>Not logged in</div>
                    </>
                )}
            </div>
        </>
    );
}

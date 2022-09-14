import React from "react";

export default function PageNotFound() {
    return (
        <>
            <div className="flex flex-1 flex-col justify-center items-center h-screen font-sans">
                <p className=" text-6xl font-bold">404 Not Found</p>
                <p className="mt-2 text-neutral-400">
                    It seems the page you are searching for simply does not
                    exist. Maybe you entered something wrong.
                </p>
                <a
                    href="/"
                    className="bg-blue-700 px-4 py-2 rounded text-3xl mt-7 font-semibold hover:bg-slate-300 hover:text-black transition-colors"
                >
                    Go Home{" "}
                </a>
            </div>
        </>
    );
}

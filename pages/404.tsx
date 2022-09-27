import React from "react";

export default function PageNotFound() {
    return (
        <>
            <div className="flex flex-1 flex-col justify-center items-center h-screen font-sans mx-5">
                <p className="text-3xl md:text-6xl font-bold">404 Not Found</p>
                <p className="mt-5 text-sm md:text-lg text-neutral-500 italic">
                    It seems the page you are searching for simply does not
                    exist. Maybe you entered something wrong.
                </p>
                <a
                    href="/"
                    className="bg-blue-700 px-4 py-2 rounded text-lg md:text-3xl mt-7 font-semibold hover:bg-slate-300 hover:text-black transition-colors"
                >
                    Back to Home
                </a>
            </div>
        </>
    );
}

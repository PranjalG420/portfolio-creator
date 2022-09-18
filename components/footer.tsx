import React from "react";
import { GitHub, Twitter, Linkedin } from "react-feather";

export default function footer() {
    return (
        <div className="flex justify-center z-0 min-h-[75px] bottom-0 mt-20 left-0 right-0 bg-zinc-900 items-center">
            <a
                href="https://github.com/PranjalG420"
                target="_blank"
                className="mx-5 hover:translate-y-[2px] transition-all hover:text-gray-400 rounded px-2 py-2"
            >
                <GitHub strokeWidth={2} size={30} />
            </a>
            <a
                href="https://twitter.com/PranjalG420"
                target="_blank"
                className="mx-5 hover:translate-y-[2px] transition-all hover:text-gray-400 rounded px-2 py-2"
            >
                <Twitter strokeWidth={2} size={30} />
            </a>
            <a
                href="https://www.linkedin.com/in/pranjal-gupta-10a595224/"
                target="_blank"
                className="mx-5 hover:translate-y-[2px] transition-all hover:text-gray-400 rounded px-2 py-2"
            >
                <Linkedin strokeWidth={2} size={30} />
            </a>
        </div>
    );
}

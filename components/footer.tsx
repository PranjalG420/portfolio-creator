import React from "react";
import { GitHub, Twitter, Linkedin } from "react-feather";

export function FooterBlock({ Icon, href }) {
  return (
    <a
      href={href}
      target="_blank"
      className="mx-1 hover:translate-y-[2px] transition-all rounded px-2 py-2"
    >
      <Icon strokeWidth={2} size={300} className="w-5 h-5" />
    </a>
  );
}

export default function footer() {
  return (
    <div className="flex flex-row fixed bottom-0 left-0">
      <FooterBlock Icon={GitHub} href="https://github.com/PranjalG420" />
      <FooterBlock Icon={Twitter} href="https://twitter.com/PranjalG420" />
      <FooterBlock
        Icon={Linkedin}
        href="https://www.linkedin.com/in/pranjal-gupta-10a595224/"
      />
    </div>
  );
}

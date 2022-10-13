import React, { useEffect, useState } from "react";
import { Sun, Moon, LogIn, LogOut, Home, Code } from "react-feather";
import { useSession, signIn, signOut } from "next-auth/react";
import { useTheme } from "next-themes";

export function IconBlock({ Icon }) {
  return (
    <Icon
      strokeWidth={2}
      size={300}
      className="tablet:w-8 tablet:h-8 w-6 h-6"
    />
  );
}

export default function navbar() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  // Getting user data
  const { data: session } = useSession();

  useEffect(() => setMounted(true), []);
  return (
    <div className="flex row min-h-[60px] backdrop-blur-sm items-center top-0 left-0 z-20 sticky text-sm tablet:text-xl font-semibold">
      <a
        href="#"
        className="hover:bg-zinc-400 dark:hover:bg-zinc-700 px-4 py-2 transition-all"
      >
        <IconBlock Icon={Home} />
      </a>
      <a
        href="/guestbook"
        className="hover:bg-zinc-400 dark:hover:bg-zinc-700 px-4 py-2 transition-all"
      >
        <IconBlock Icon={Code} />
      </a>
      <div className="flex flex-row">
        {(session && (
          <div className="flex flex-col items-center">
            <img
              src={session.user.image}
              className="max-h-8 tablet:max-h-9 px-4 rounded-[50%]"
            ></img>
            <button
              onClick={() => signOut()}
              className="hover:bg-zinc-400 dark:hover:bg-zinc-700 px-4 py-2 rounded transition-all"
            >
              <IconBlock Icon={LogOut} />
            </button>
          </div>
        )) || (
          <button
            onClick={() => signIn()}
            className="hover:bg-zinc-400 dark:hover:bg-zinc-700 px-4 py-2 transition-all"
          >
            <IconBlock Icon={LogIn} />
          </button>
        )}
        <button
          className="hover:bg-zinc-400 dark:hover:bg-zinc-700 px-4 py-2 transition-all"
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        >
          {mounted && theme == "dark" ? (
            <IconBlock Icon={Sun} />
          ) : (
            <IconBlock Icon={Moon} />
          )}
        </button>
      </div>
    </div>
  );
}

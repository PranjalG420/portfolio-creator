import "../styles/globals.css";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import { SessionProvider } from "next-auth/react";
import { ThemeProvider } from "next-themes";

export default function MyApp({
  Component,
  pageProps: { session, ...pageProps },
}) {
  return (
    <SessionProvider session={session}>
      <ThemeProvider attribute="class">
        <div className="min-h-screen flex flex-col items-center text-black bg-zinc-300 dark:text-white dark:bg-zinc-800 ">
          <Navbar />
          <div className="flex flex-col flex-1 items-center tablet:max-w-[900px]">
            <Component {...pageProps} />
          </div>
          <Footer />
        </div>
      </ThemeProvider>
    </SessionProvider>
  );
}

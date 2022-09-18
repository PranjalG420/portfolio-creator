import "../styles/globals.css";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import type { AppProps } from "next/app";
import { SessionProvider } from "next-auth/react";
import type { Session } from "next-auth";
import "@fontsource/josefin-sans";

function MyApp(
    props: AppProps & { user: string | undefined; session: Session }
) {
    const { Component, pageProps } = props;
    return (
        <SessionProvider session={props.session}>
            <div className="min-h-screen flex flex-col">
                <Navbar user={props.user} />
                <div className="flex flex-1 flex-col justify-center">
                    <Component {...pageProps} />
                </div>
                <Footer />
            </div>
        </SessionProvider>
    );
}

export default MyApp;

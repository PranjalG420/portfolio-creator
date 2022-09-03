import "../styles/globals.css";
import Navbar from "../components/navbar";
import { GetServerSideProps } from "next";
import type { AppProps } from "next/app";

function MyApp(props: AppProps & { user: string | undefined }) {
    const { Component, pageProps } = props;
    return (
        <>
            <Navbar user={props.user} />
            <Component {...pageProps} />
        </>
    );
}

MyApp.getInitialProps = async (ctx) => {
    // console.log(ctx.ctx.req?.cookies.user);
    return { user: ctx.ctx.req?.cookies.user ?? null };
};

export default MyApp;

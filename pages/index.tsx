import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { useInView } from "react-intersection-observer";

export default function Home() {
    const { inView, ref } = useInView();
    // console.log(inView);

    return (
        <>
            <span className="text-5xl group w-min ">
                {/* Hover */}
                {/* <h2>{`Header inside viewport ${inView}.`}</h2>

                <section className="min-h-[100vh]">
                    <p>Second text</p>
                </section>
                <section className="min-h-[100vh]">
                    <p>Third text</p>
                </section>
                <div ref={ref}>
                    <section
                        className={
                            `min-h-[75vh] transition-all` +
                            (inView ? " visible" : "invisible")
                        }
                    >
                        <p>First text</p>
                    </section>
                    <h2>{`Header inside viewport ${inView}.`}</h2>
                </div> */}
                {/* <p className="invisible relative top-[200px] group-hover:visible">
                    Text
                </p> */}
            </span>
        </>
    );
}

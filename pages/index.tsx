import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { useInView } from "react-intersection-observer";
import { GetStaticProps } from "next";
import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import rehypeStringify from "rehype-stringify";
import remarkFrontmatter from "remark-frontmatter";
import fs from "node:fs";
import path from "node:path";

export default function Home({ content }) {
    const { inView, ref } = useInView();
    // console.log(inView);

    return (
        <>
            <span className=" group w-min ">
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
                <div
                    className="text-container"
                    dangerouslySetInnerHTML={{ __html: content }}
                />
            </span>
        </>
    );
}

export const getStaticProps: GetStaticProps = async (context) => {
    const content = fs.readFileSync(
        path.join(process.cwd(), "data/home.md"),
        "utf8"
    );
    const file = await unified()
        .use(remarkParse)
        .use(remarkRehype)
        .use(rehypeStringify)
        .use(remarkFrontmatter)
        .process(content);
    return {
        props: {
            content: file.toString(),
        },
    };
};

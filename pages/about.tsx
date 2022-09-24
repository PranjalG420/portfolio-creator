import React from "react";
import { GetStaticProps } from "next";
import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import rehypeStringify from "rehype-stringify";
import remarkFrontmatter from "remark-frontmatter";
import fs from "node:fs";
import path from "node:path";

export default function about({ content }) {
    return (
        <>
            <div>
                <p>about</p>
                <div
                    className="text-container"
                    dangerouslySetInnerHTML={{ __html: content }}
                />
            </div>
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

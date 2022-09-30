import React from "react";
import Container from "../components/container";
import about_data from "../data/about_data";

export default function about() {
    const data = about_data.map((item) => {
        return (
            <Container
                key={item.id}
                title={item.title}
                content={item.content}
            />
        );
    });
    return (
        <>
            <div>{data}</div>
        </>
    );
}

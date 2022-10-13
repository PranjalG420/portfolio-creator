import React from "react";

export default function container(props) {
  return (
    <>
      <div>{props.title}</div>
      <div>{props.content}</div>
    </>
  );
}

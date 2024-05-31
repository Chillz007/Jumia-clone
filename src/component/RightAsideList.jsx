import React from "react";
import { rightSide } from "../constant/data";
import RightAside from "./RightAside";

export default function RightAsideList() {
  return (
    <ul
      style={{
        background: "white",
        width: "100",
        paddingInlineStart: "0",
        borderRadius: "5px",
        margin: "5px",
        height: "50%",
      }}
    >
      {rightSide.map((side) => {
        return <RightAside key={side.id} item={side} />;
      })}
    </ul>
  );
}

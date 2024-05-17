import React from "react";
import { rightSide } from "../constant/data";
import RightAside from "./RightAside";

export default function RightAsideList() {
  return (
    <ul style={{ background: "white", width: "20%", gap: "5px" }}>
      {rightSide.map((side) => {
        return <RightAside key={side.id} item={side} />;
      })}
    </ul>
  );
}

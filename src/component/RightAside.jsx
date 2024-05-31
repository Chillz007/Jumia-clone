import React from "react";

export default function RightAside({ item }) {
  return (
    <li
      style={{
        display: "flex",
        // alignItems: "center",
        gap: "5px",
        background: "white",
        padding: "17px 18px",
        fontSize: ".875rem",
        color: "#313139",
        width: "100%",
        height: "auto",
        borderRadius: "8px",
      }}
    >
      <img style={{ width: "28px" }} src={item.pic} alt="" />
      <div style={{ fontWeight: "15px" }}>{item.text}</div>
    </li>
  );
}

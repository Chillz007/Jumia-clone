import React from "react";

export default function SideBar({ iconData }) {
  return (
    <li
      style={{
        display: "flex",
        alignItems: "center",

        marginBottom: "12px",
        gap: "5px",
      }}
    >
      {iconData.icon}
      {iconData.iconText}
    </li>
  );
}

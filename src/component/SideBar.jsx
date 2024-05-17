import React from "react";

export default function SideBar({ iconData }) {
  return (
    <li
      style={{
        display: "flex",
        alignItems: "center",
        marginBottom: "10px",
        gap: "10px",
      }}
    >
      {iconData.icon}
      {iconData.iconText}
    </li>
  );
}

import React from "react";
import { asideData } from "../constant/data";
import SideBar from "./SideBar";

export default function SideBarList() {
  return (
    <ul
      style={{
        background: "white",
        width: "250px",
        textDecoration: "none",
        paddingLeft: "8px",
        fontSize: ".875rem",
        color: "#313139",
        borderRadius: "5px",
      }}
    >
      {asideData.map((icon) => {
        return <SideBar key={icon.data} iconData={icon} />;
      })}
    </ul>
  );
}

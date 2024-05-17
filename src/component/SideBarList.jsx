import React from "react";
import { asideData } from "../constant/data";
import SideBar from "./SideBar";

export default function SideBarList() {
  return (
    <ul style={{ background: "white", width: "20%", textDecoration: "none" }}>
      {asideData.map((icon) => {
        return <SideBar key={icon.data} iconData={icon} />;
      })}
    </ul>
  );
}

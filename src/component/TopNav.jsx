import React from "react";
import "./topNav.css";
import top from "../assets/logos/TOP-STRIP_FASHION-WEEK.gif";

export default function TopNav() {
  return (
    <>
      <div className="nav-top">
        <img
          style={{
            display: "block",
            marginLeft: "auto",
            marginRight: "auto",
            width: "95%",
            //   height: "10%",
            objectFit: "cover",
            padding: "0",
          }}
          src={top}
          alt=""
        />
      </div>
    </>
  );
}

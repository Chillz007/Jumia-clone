import React from "react";
import SideBarList from "./SideBarList";
import hero from "../assets/logos/Fashion_BG.jpg";
import RightAsideList from "./RightAsideList";
import earn from "../assets/images/shop_earn.png";

export default function Hero() {
  return (
    <a href="">
      <div
        style={{
          display: "flex",
          gap: "5px",
          width: "",
          margin: "5px",
          borderRadius: "5px",
        }}
      >
        {" "}
        <SideBarList />
        <div style={{ gap: "5px", width: "60%" }}>
          <img style={{ width: "100%" }} src={hero} alt="Fashion-week-BG" />
        </div>
        <div style={{ margin: "5px" }}>
          <RightAsideList />
          <div>
            <img src={earn} alt="shop-earn" />
          </div>
        </div>
      </div>
    </a>
  );
}

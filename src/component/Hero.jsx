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
          margin: "20px",
          borderRadius: "5px",
          paddingRight: "50px",
          paddingLeft: "50px",
          justifyContent: "space-evenly",
        }}
      >
        <SideBarList />
        <div style={{ gap: "px", width: "70%" }}>
          <img style={{ width: "100%" }} src={hero} alt="Fashion-week-BG" />
        </div>
        <div style={{ margin: "0 auto" }}>
          <RightAsideList />
          <div style={{ marginLeft: "5px", marginTop: "13px", width: "95%" }}>
            <img src={earn} alt="shop-earn" />
          </div>
        </div>
      </div>
    </a>
  );
}

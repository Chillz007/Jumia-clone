import React from "react";
import OtherBarItems from "./OtherBarItems";
import { VscAccount } from "react-icons/vsc";
import { AiOutlineQuestionCircle } from "react-icons/ai";
import { MdOutlineShoppingCart } from "react-icons/md";
import { RiArrowDropDownLine } from "react-icons/ri";

// const Bars = [
//   { BarIcon: VscAccount , name: "Account" },
//   { BarIcon: AiOutlineQuestionCircle , name: "Help" },
//   { BarIcon:  MdOutlineShoppingCart , name: "Cart" },
// ];
export default function OtherBar() {
  return (
    <div
      className="bar"
      style={{ display: "flex", justifyContent: "space-between", gap: "20px" }}
    ></div>
  );
}

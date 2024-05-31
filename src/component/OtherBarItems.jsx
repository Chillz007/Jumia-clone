import React from "react";
import { Bars } from "./OtherBar";
import { VscAccount } from "react-icons/vsc";
import { AiOutlineQuestionCircle } from "react-icons/ai";
import { MdOutlineShoppingCart } from "react-icons/md";
import { RiArrowDropDownLine } from "react-icons/ri";

export default function OtherBarItems({ items }) {
  return (
    <div className="Brr" style={{ display: "flex" }}>
      <div className="Bar" style={{ display: "flex" }}>
        <div className="Bar-icon">
          <VscAccount />
          <AiOutlineQuestionCircle />
          <span>{/* {items.name} */}</span>
          <RiArrowDropDownLine />
        </div>
      </div>
    </div>
  );
}

import React from "react";
import "./searchBar.css";
import { IoSearchSharp } from "react-icons/io5";
import { VscAccount } from "react-icons/vsc";
import { IoMdHelpCircleOutline } from "react-icons/io";
import { MdOutlineShoppingCart } from "react-icons/md";
import { IoIosArrowDown } from "react-icons/io";

export default function SearchBar() {
  return (
    <>
      <div
        style={{
          display: "flex",
          width: "100%",
          gap: "2px",
          justifyContent: "",
        }}
      >
        <div className="search-container">
          <div>
            <IoSearchSharp />
          </div>
          <input
            className="search-input"
            type="text"
            placeholder="Search products, brands and categories"
          />
        </div>
        <button
          className="btn"
          style={{
            background: "#E07E1B",
            color: "white",
            border: "1px solid #E07E1B",
            borderRadius: "3px",
            padding: "3px 20px",
            textTransform: "uppercase",
            fontWeight: "600",
          }}
        >
          Search
        </button>
      </div>

      <div style={{ display: "flex", gap: "50px", marginLeft: "0" }}>
        <a href="" style={{ display: "flex", gap: "2px" }}>
          <VscAccount />
          Account
          <IoIosArrowDown />
        </a>
        <a href="" style={{ display: "flex", gap: "2px" }}>
          <IoMdHelpCircleOutline />
          Help
          <IoIosArrowDown />
        </a>
        <a href="" style={{ display: "flex", gap: "2px" }}>
          <MdOutlineShoppingCart />
          <span>Cart</span>
        </a>
      </div>
    </>
  );
}

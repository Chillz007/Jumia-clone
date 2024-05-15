import React from "react";
import { CiHome } from "react-icons/ci";
import { CiShoppingCart } from "react-icons/ci";

// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import bonanza from "../assets/images/Beauty_bonanza.jpg";
import phone from "../assets/logos/phone-icon-1.png";
import shop from "../assets/logos/icone-seller-1.png";

export default function Main() {
  return (
    <main style={{ background: "white" }}>
      <CiHome style={{ width: "200px" }} />
      <CiShoppingCart style={{ width: "200px" }} />
      <div style={{ display: "flex" }}></div>
    </main>
  );
}

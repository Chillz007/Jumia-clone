import React from "react";
import logo from "../assets/logos/jumia-logo.png";

export default function Logo({ width, alt, imageSrc }) {
  return (
    <div>
      <img src={imageSrc} alt={alt} width={width} />
    </div>
  );
}

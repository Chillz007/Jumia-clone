import React from "react";
import { clearanceSales } from "../constant/data";
import Sales from "./Sales";

export default function ClearanceSales() {
  return (
    <div
      style={{
        display: "flex",
        width: "100%",
        margin: "0 auto",
      }}
    >
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          width: "89%",
          margin: "0 auto",
          background: "white",
          padding: "5px",
          borderRadius: "5px",
        }}
      >
        {clearanceSales.map((sales) => (
          <Sales sales={sales} key={sales.id} />
        ))}
      </div>
    </div>
  );
}

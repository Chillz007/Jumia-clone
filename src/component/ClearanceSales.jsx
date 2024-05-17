import React from "react";
import { clearanceSales } from "../constant/data";
import Sales from "./Sales";

export default function ClearanceSales() {
  return (
    <div
      style={{
        display: "flex",
        width: "80%",
        margin: "0 auto",
        // gap: "5px",
      }}
    >
      {clearanceSales.map((sales) => (
        <div style={{ width: "350%" }} key={sales.id}>
          <Sales sales={sales} />
        </div>
      ))}
    </div>
  );
}

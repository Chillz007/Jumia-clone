import React from "react";

export default function Sales({ sales }) {
  return (
    <div
      style={{
        // display: "flex",
        background: "white",
        width: "15%",
        margin: "0 auto",
        justifyContent: "space-between",
        textAlign: "center",
        borderRadius: "5px",
      }}
    >
      <div style={{ width: "100%", borderRadius: "8px" }}>
        <img src={sales.pic} alt="" />
      </div>
      <p>{sales.name}</p>
    </div>
  );
}

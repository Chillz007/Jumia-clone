import React from "react";

export default function Sales({ sales }) {
  return (
    <div>
      <div>
        <img src={sales.pic} alt="" />
      </div>
      <p>{sales.name}</p>
    </div>
  );
}

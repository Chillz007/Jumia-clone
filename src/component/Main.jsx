import React from "react";
import { allPictures } from "../constant/data";
import AllPictures from "./AllPictures";

export default function Main() {
  return (
    <div style={{ textAlign: "center" }}>
      {allPictures.map((category) => (
        <div style={{ margin: "5px 0" }} key={category.id}>
          <h2
            style={{
              background: "#FFBA00",
              padding: "10px 0",
              width: "89%",
              margin: "0 auto",
            }}
          >
            {category.category}
          </h2>
          <AllPictures pics={category} />
        </div>
      ))}
    </div>
  );
}

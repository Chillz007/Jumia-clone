import React from "react";

export default function AllPictures({ pics }) {
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        alignItems: "center",
        width: "80%",
        margin: "auto",
        gap: "5px",
        background: "white",
      }}
    >
      {pics.data.map((item) => {
        return (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              margin: "0  auto",
              flexBasis: "15%",
              alignItems: "center",
              textAlign: "center",
            }}
          >
            <img src={item.pic} alt="" />
            <p>{item.name}</p>
          </div>
        );
      })}

      {/* {pics.map((pic, index) => (
        <img key={index} src={pic} alt="" />
      ))} */}
    </div>
  );
}

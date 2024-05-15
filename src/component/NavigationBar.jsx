import React from "react";
import "./navigation.css";

export default function NavigationBar({ children, type }) {
  return <div className={`${type}`}>{children}</div>;
}

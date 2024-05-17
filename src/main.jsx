import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
// import Nav from "./component/Nav";
import App from "./App";

const container = document.querySelector("#root");
const root = createRoot(container);
root.render(<App />);

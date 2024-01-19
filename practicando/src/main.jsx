import React from "react";
import ReactDOM from "react-dom/client";
import { CounterApp } from "./CounterApp.jsx";
import "./index.css";
import { FirstApp } from "./FirstApp";
ReactDOM.createRoot(document.getElementById("root")).render(
   <React.StrictMode>
      {/* <CounterApp value= {0} /> */}
      <FirstApp title="hola , soy vegeta" />
   </React.StrictMode>
);

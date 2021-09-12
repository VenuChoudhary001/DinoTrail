import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { PROVIDER } from "./Utility/index";

ReactDOM.render(
  <React.StrictMode>
    <PROVIDER>
      <App />
    </PROVIDER>
  </React.StrictMode>,
  document.getElementById("root")
);

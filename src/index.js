import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "./Knob.css";
import Knob from "./Knob";
import * as serviceWorker from "./serviceWorker";
ReactDOM.render(
  <div>
    <Knob size="100px" />
    <Knob size="150px" />
    <Knob size="80px" />
  </div>,

  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();

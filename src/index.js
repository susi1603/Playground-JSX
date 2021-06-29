//var React = require("react");
//var ReactDOM = require("react-dom");

import React from "react";
import ReactDOM from "react-dom";
const myLuckyNumber = 24;

ReactDOM.render(
  <div>
    <h1>Hello World!</h1>
    <p>This is a paragraph {myLuckyNumber} </p>
  </div>,
  document.getElementById("root")
);

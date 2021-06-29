//var React = require("react");
//var ReactDOM = require("react-dom");

import React from "react";
import ReactDOM from "react-dom";
const myLuckyNumber = Math.floor(Math.random() * 10);
const firstName = "Susy";
const lastName = "Reyes";

ReactDOM.render(
  <div>
    <h1>Hello World! I am {`${firstName} ${lastName}`}</h1>
    <p>And this is your lucky number {myLuckyNumber} </p>
    <p></p>
  </div>,
  document.getElementById("root")
);

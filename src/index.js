//var React = require("react");
//var ReactDOM = require("react-dom");

import React from "react";
import ReactDOM from "react-dom";
const myLuckyNumber = Math.floor(Math.random() * 10);
const firstName = "Susy";
const lastName = "Reyes";

const customStyle = {
  color: "red",
  fontSize: "20px",
  border: "1px solid black"
};

customStyle.color = "blue";

ReactDOM.render(
  <div>
    <h1>Hello World! I am {`${firstName} ${lastName}`}</h1>
    <p>And this is your lucky number {myLuckyNumber} </p>
    <p style={{ color: "purple" }}>Color purple inline-style.</p>
    <h1 style={customStyle}> A custom style without CSS</h1>
  </div>,
  document.getElementById("root")
);

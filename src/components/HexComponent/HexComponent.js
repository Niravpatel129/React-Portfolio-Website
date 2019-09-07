import React, { Component } from "react";
import "./HexComponent.scss";
import image from "./imagesvg.svg";

class HexComponent extends Component {
  render() {
    return (
      <div className="HexComponent">
        <h4>Branding</h4>
        <img src={image} alt={image}></img>
      </div>
    );
  }
}

export default HexComponent;

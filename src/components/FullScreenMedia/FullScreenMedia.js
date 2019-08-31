import React, { Component } from "react";
import header from "./header.png"; // Tell Webpack this JS file uses this image
import "./FullScreenMedia.scss";

class FullScreenMedia extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="FullScreenMedia">
        <img src={header} alt="header"></img>
      </div>
    );
  }
}

export default FullScreenMedia;

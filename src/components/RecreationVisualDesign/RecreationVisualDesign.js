import React, { Component } from "react";

import "./RecreationVisualDesign.scss";
import image1 from "./recreation.3.jpg";
import image2 from "./recreation.4.jpg";
import image3 from "./recreation.5.jpg";

class RecreationVisualDesign extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="RecreationVisualDesign">
        <h4>
          Visual <br></br> Design
        </h4>
        <img src={image1} alt={image1}></img>
        <img src={image2} alt={image2}></img>
        <img src={image3} alt={image3}></img>
      </div>
    );
  }
}

export default RecreationVisualDesign;

import React, { Component } from "react";

import "./HomeGroup.scss";

import image1 from "./image1.svg";
import image2 from "./image2.svg";
import image3 from "./image3.svg";

class HomeGroup extends Component {
  render() {
    return (
      <div className="HomeGroup">
        <div className="SectionBlock">
          <img src={image1} alt="1"></img>
          <div className="captions">
            <h3>AUGMENTED REALITY</h3>
            <h3>VOICE RECOGNITION</h3>
            <h3>WEBSITE</h3>
          </div>
          <h1>01</h1>
        </div>
        <div className="SectionBlock">
          <img src={image2} alt="2"></img>
          <div className="captions">
            <h3>WEBSITE DESIGN</h3>
            <h3>UI / UX</h3>
            <h3>PRODUCT</h3>
          </div>
          <h1>02</h1>
        </div>
        <div className="SectionBlock">
          <img src={image3} alt="3"></img>
          <div className="captions">
            <h3>WEBSITE DESIGN</h3>
            <h3>UI / UX</h3>
            <h3>PRODUCT</h3>
          </div>
          <h1>03</h1>
        </div>
      </div>
    );
  }
}

export default HomeGroup;

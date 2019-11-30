import React, { Component } from "react";

import "./ImageBoxes.scss";

import Wolf1 from "./storytale-wolf.1.jpg";
import Wolf2 from "./storytale-wolf.2.jpg";
import Land1 from "./storytale-pigscene.jpg";
import Land2 from "./storytale-wolfscene.jpg";
import Pig1 from "./storytale-pig.1.jpg";
import Pig2 from "./storytale-pig.2.jpg";

class ImageBoxes extends Component {
  render() {
    return (
      <div className="ImageBoxes">
        <div className="titlebox">
          <h4>
            3D <br></br>
            Modelling
          </h4>
          <h4>
            Character <br></br>Design
          </h4>
          <div className="top">
            <img src={Wolf1} alt={Wolf1}></img>
            <img src={Wolf2} alt={Wolf2}></img>
            <img src={Pig1} alt={Pig1}></img>
            <img src={Pig2} alt={Pig2}></img>
          </div>
        </div>
        <div className="titlebox">
          <h4>
            3D <br></br>
            Modelling
          </h4>
          <h4>
            Scene <br></br>Layout
          </h4>
          <div className="bottom">
            <img src={Land1} alt={Pig1}></img>
            <img src={Land2} alt={Pig2}></img>
          </div>
        </div>
        <h4 className="conclusion">
          The <br></br>Conclusion
        </h4>
        <p>
          Parents and their kids are more digitally oriented than ever. As shown
          with Storytale, storytelling can be more collaborative and engaging.
          <br></br> <br></br>Instead of replacing the physical experience, we
          wanted to see this as an opprotunity and enhance it.
        </p>
      </div>
    );
  }
}

export default ImageBoxes;

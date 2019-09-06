import React, { Component } from "react";
import "./Userflow.scss";
import ipad1 from "./iPad1.png";
import ipad2 from "./iPad2.png";
import ipad3 from "./iPad3.png";
import ipad4 from "./iPad4.png";
import ipad5 from "./iPad5.png";

class Userflow extends Component {
  render() {
    return (
      <div className="Userflow">
        <h4>
          User <br></br>Flow
        </h4>
        <div className="imageblock">
          <img src={ipad1} alt={ipad1}></img>
          <p>Families can visit Storytale website</p>
        </div>
        <div className="imageblock">
          <img src={ipad2} alt={ipad2}></img>
          <p>They will then be able to select a story to read</p>
        </div>
        <div className="imageblock">
          <img src={ipad3} alt={ipad3}></img>
          <p>Website asks for access to their microphone and camera</p>
        </div>
        <div className="imageblock">
          <img src={ipad4} alt={ipad4}></img>

          <p>
            Famillies can then find an appropriate surface and places the scene
          </p>
        </div>
        <div className="imageblock">
          <img src={ipad5} alt={ipad5}></img>
          <p>
            Start reading the story to interact and see the scene change as one
            reads
          </p>
        </div>
      </div>
    );
  }
}

export default Userflow;

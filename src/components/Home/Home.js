import React, { Component } from "react";
import homeImage from "./header.svg";
import "./Home.scss";

class Home extends Component {
  render() {
    return (
      <div className="Home">
        <img src={homeImage} alt={homeImage}></img>

        <h1>I’M AN INTERAC-TION AND VISUAL DESIGNER</h1>
      </div>
    );
  }
}

export default Home;

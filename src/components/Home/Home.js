import React, { Component } from "react";
import homeImage from "./header.svg";
import Logo from "./Logo.svg";

import "./Home.scss";

class Home extends Component {
  render() {
    return (
      <div className="Home">
        <img className="HomeImage" src={homeImage} alt={homeImage}></img>

        <h1>I’M AN INTERAC-TION AND VISUAL DESIGNER</h1>
        <p>last updated: 07/26/19</p>
        <img className="logo" src={Logo} alt={Logo}></img>
      </div>
    );
  }
}

export default Home;

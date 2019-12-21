import React, { Component } from "react";
import homeImage from "./Header-Image.png";
import Logo from "./Logo.svg";
import ScrollAnimation from "react-animate-on-scroll";

import "./Home.scss";

class Home extends Component {
  render() {
    return (
      <ScrollAnimation animateIn="bounceIn">
        <div className="Home">
          <img className="HomeImage" src={homeImage} alt={homeImage}></img>

          <h1>INTER-ACTION & VISUAL DESIGN-ER</h1>
          <p>last updated: 07/26/19</p>
          <img className="logo" src={Logo} alt={Logo}></img>
        </div>
      </ScrollAnimation>
    );
  }
}

export default Home;

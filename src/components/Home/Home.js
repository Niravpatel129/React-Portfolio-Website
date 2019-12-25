import React, { Component } from "react";
import homeImage from "./Header-Image.png";
import Logo from "./Logo.svg";
import ScrollAnimation from "react-animate-on-scroll";

import { TweenLite, Power2 } from "gsap";

import "./Home.scss";

class Home extends Component {
  constructor(props) {
    super(props);
    this.logo = React.createRef();
    this.title = React.createRef();
    this.banner = React.createRef();
    this.component = React.createRef();
    this.state = { hovering: false };
  }

  handleMouseOver = () => {
    TweenLite.to(this.component.current, 0.5, {
      css: { backgroundColor: "yellow" },
      ease: Power2.easeIn
    });

    TweenLite.to(this.banner.current, 0, {
      css: { visibility: "hidden" }
    });

    TweenLite.to(this.title.current, 0, {
      css: { visibility: "hidden" }
    });
  };

  handleMouseLeave = () => {
    TweenLite.to(this.component.current, 0, {
      css: { backgroundColor: "black" }
    });

    TweenLite.to(this.banner.current, 0, {
      css: { visibility: "visible" }
    });

    TweenLite.to(this.title.current, 0, {
      css: { visibility: "visible" }
    });
  };

  render() {
    return (
      <ScrollAnimation animateIn="bounceIn">
        <div className="Home" ref={this.component}>
          <img
            ref={this.banner}
            className="HomeImage"
            src={homeImage}
            alt={homeImage}
          ></img>

          <h1 ref={this.title}>INTER-ACTION & VISUAL DESIGN-ER</h1>
          <p>last updated: 07/26/19</p>
          <img
            className="logo"
            onMouseEnter={this.handleMouseOver}
            onMouseLeave={this.handleMouseLeave}
            ref={this.logo}
            src={Logo}
            alt={Logo}
          ></img>
        </div>
      </ScrollAnimation>
    );
  }
}

export default Home;

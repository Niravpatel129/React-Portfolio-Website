import React, { Component } from "react";
import { Link } from "react-router-dom";
import { TweenLite } from "gsap";

import "./nextCaseStudy.scss";
import image1 from "./Thumbnail-1.jpg";
import image2 from "./Thumbnail-1.jpg";
import image3 from "./Thumbnail-1.jpg";
import image4 from "./Thumbnail-1.jpg";

class nextCaseStudy extends Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
  }

  mouseMove = e => {
    TweenLite.to(this.myRef.current, 0.5, {
      css: {
        left: e.pageX,
        top: e.pageY
      },
      delay: 0.03
    });
  };

  handleMouseEnter = () => {
    console.log("enter");
    TweenLite.to(this.myRef.current, 0, {
      css: {
        opacity: "1"
      }
    });
  };

  handleMouseLeave = () => {
    console.log("leave");

    TweenLite.to(this.myRef.current, 0, {
      css: {
        opacity: "1"
      }
    });
  };

  onHover = e => {
    if (e.target.className === "project p-1") {
      TweenLite.to(this.myRef.current, 0, {
        css: { "background-image": "url(" + image1 + ")" }
      });
    }
    if (e.target.className === "project p-2") {
      TweenLite.to(this.myRef.current, 0, {
        css: { "background-image": "url(" + image2 + ")" }
      });
    }
    if (e.target.className === "project p-3") {
      TweenLite.to(this.myRef.current, 0, {
        css: { "background-image": "url(" + image3 + ")" }
      });
    }
    if (e.target.className === "project p-4") {
      TweenLite.to(this.myRef.current, 0, {
        css: { "background-image": "url(" + image4 + ")" }
      });
    }
  };

  render() {
    let theme = this.props.theme;
    return (
      <React.Fragment>
        <div
          className="nextCaseStudy"
          id={theme}
          onMouseLeave={this.handleMouseLeave}
        >
          <div className="cursor" ref={this.myRef}></div>
          <div
            className="nextAndBack"
            onMouseOver={this.mouseMove}
            onMouseEnter={this.handleMouseEnter}
          >
            <Link to="/">
              <h1 onMouseEnter={this.onHover}>Next</h1>
            </Link>
            <Link to="/">
              <h1 onMouseEnter={this.onHover}>Previous</h1>{" "}
            </Link>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default nextCaseStudy;

import React, { Component } from "react";
import { Link } from "react-router-dom";

import "./nextCaseStudy.scss";
import image1 from "./Thumbnail-1.jpg";

class nextCaseStudy extends Component {
  render() {
    let theme = this.props.theme;
    return (
      <div className="nextCaseStudy" id={theme}>
        <Link to="/">
          <h1>Next</h1>
          {/* <img src={image1} alt={image1}></img> */}
        </Link>
        <Link to="/">
          <h1>Previous</h1>{" "}
        </Link>
      </div>
    );
  }
}

export default nextCaseStudy;

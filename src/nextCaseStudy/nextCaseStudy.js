import React, { Component } from "react";
import "./nextCaseStudy.scss";

class nextCaseStudy extends Component {
  render() {
    let theme = this.props.theme;
    return (
      <div className="nextCaseStudy" id={theme}>
        <h1>Next</h1>
        <h1>Previous</h1>
      </div>
    );
  }
}

export default nextCaseStudy;

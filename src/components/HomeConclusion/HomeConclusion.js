import React, { Component } from "react";

import "./HomeConclusion.scss";
class HomeConclusion extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="HomeConclusion">
        <div className="about">
          I focus on product design, experiences, and visual design. Am
          currently seeking internships or possible design positions. <br></br>
          <br></br>
          <p className="letstalk">
            Let’s talk at mivuuuu@gmail.com! Click here for my <u>resume</u>
          </p>
        </div>

        <div className="paragraph4">
          <h3>EDUCATION</h3>
          <p>
            York University & Sheridan College Joint Program in Design
            <br></br>
            <br></br>
            &nbsp; Bachelor of Design with Honours (BDes) <br></br>
            <br></br>Fall 2014 - Fall 2019
          </p>
        </div>

        <div className="paragraph3">
          <h3>ELSEWHERE</h3>
          <p>
            Instagram
            <br></br>
            LinkedIn
            <br></br>
            Dribbble
            <br></br>
            SketchFab
            <br></br>
            Are.Na
          </p>
        </div>
      </div>
    );
  }
}

export default HomeConclusion;

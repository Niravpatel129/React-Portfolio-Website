import React, { Component } from "react";

import "./HomeConclusion.scss";
class HomeConclusion extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="HomeConclusion" id="HomeConclusion">
        <div className="about">
          I focus on product design, <br></br>experiences, and visual design.
          <br></br> Am currently seeking internships or possible design
          positions. <br></br>
          <p className="letstalk">
            Let’s talk at mivuuuu@gmail.com! <br></br>Click here for my{" "}
            <u>resume</u>
          </p>
        </div>

        <div className="paragraph4">
          <h3>EDUCATION</h3>
          <p>
            York University & Sheridan College Joint Program in Design
            <br></br>
            <br></br>
            <span className="bach">
              Bachelor of Design with Honours (BDes)
            </span>{" "}
            <br></br>
            <br></br>Fall 2014 - Fall 2019
          </p>
        </div>

        <div className="paragraph3">
          <h3>ELSEWHERE</h3>
          <p>
            <a href="https://www.instagram.com/mivuvu/">Instagram</a>
            <br></br>
            <a href="https://www.linkedin.com/in/michelle-vu-062953139/">
              LinkedIn
            </a>
            <br></br>
            <a href="https://dribbble.com/mivuu">Dribbble</a>
            <br></br>
            <a href="https://www.behance.net/michellevuu">Behance</a>
          </p>
        </div>
      </div>
    );
  }
}

export default HomeConclusion;

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
        <div className="paragraph1">
          <h3>ABOUT</h3>
          <p>
            I focus on product design, experiences, and design systems. I’m
            currently on the lookout for any internship or designer positions.
            <br></br>
            <br></br>
            Let’s talk at mivuuuu@gmail.com! <br></br>
            <br></br>Click here for my{" "}
            <u>
              <a href="/">Resume</a>
            </u>
          </p>
        </div>

        <div className="paragraph2">
          <h3>EXPERIENCES</h3>
          <p>
            I have currently finished a design internship @ WE3 (Jam3). Before
            that, I've had done minor Freelance work for Jam3 and had the
            pleasure of interning The Garden Collective.
            <br></br>
            <br></br>
            If you'd like to chat, or better yet, profess your undying love for
            dogs, please get in touch.
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

        <div className="paragraph4">
          <h3>EDUCATION</h3>
          <p>
            York University & Sheridan College Joint Program in Design
            <br></br>
            <br></br>
            &nbsp; Bachelor of Design with Honours (BDes)
          </p>
        </div>
      </div>
    );
  }
}

export default HomeConclusion;

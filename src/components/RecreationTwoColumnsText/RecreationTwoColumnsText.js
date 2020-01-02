import React, { Component } from "react";

import "./RecreationTwoColumnsText.scss";

class RecreationTwoColumnsText extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="RecreationTwoColumnsText">
        <div className="block">
          <h3>
            The<br></br> Problem
          </h3>
          <p>
            The platform is in need of a new visual design and a reorganized
            information architecture as the current one is insufficient.
            <br></br>
            <br></br>
            The current platform is outdated and simply lacks showing the
            important information, whereas the pamphlet provides important
            information. Therefore, most customers will use the pamphlet or do
            most business over the phone and in person. However, pamphlets are
            outdated as most classes would get canceled if there isn’t enough
            participants.
          </p>
        </div>

        <div className="block">
          <h3>
            Addressing the <br></br>Current Architecture
          </h3>
          <p>
            To better understand the current information architecture of
            guelph.ca page, I mapped out their current platform and its content.
            <br></br>
            <br></br>
            After mapping out the content, I myself, was struggling to
            accomplish simple tasks as the user journey becomes more complicated
            screen after screen. Therefore, I was able to formulate what I was
            seeking for in my user interviews.
          </p>
        </div>
      </div>
    );
  }
}

export default RecreationTwoColumnsText;

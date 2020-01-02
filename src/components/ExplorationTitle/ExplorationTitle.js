import React, { Component } from "react";

import "./ExplorationTitle.scss";

class ExplorationTitle extends Component {
  render() {
    return (
      <div className="ExplorationTitle">
        <h1>3D Exploration</h1>
        <div className="typeboxes">
          <div className="typebox1">
            <h3>TYPE</h3>
            <p>
              UI/UX, Product, Interaction, Website, Augmented Reality, Voice
              Recognition
            </p>
          </div>
          <div className="typebox2">
            <h3>TOOLS</h3>
            <p>
              Sketch, Cinema4D, AfterEffects, Mixamo, 8thWall, Voice Recognition
              API
            </p>
          </div>
          <div className="typebox3">
            <h3>TIME</h3>
            <p>
              June 2019 - August 2019. The project 3 was estimated around 3
              months
            </p>
          </div>
        </div>{" "}
      </div>
    );
  }
}

export default ExplorationTitle;

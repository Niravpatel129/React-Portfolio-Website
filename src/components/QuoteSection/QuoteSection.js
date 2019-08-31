import React, { Component } from "react";
import "./QuoteSection.scss";

class QuoteSection extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="QuoteSection">
        <h1>StoryTale</h1>
        <div className="typeboxes">
          <div className="typebox">
            <h3>TYPE</h3>
            <p>
              UI/UX, Product, Interaction, Website, Augmented Reality, Voice
              Recognition
            </p>
          </div>
          <div className="typebox">
            <h3>TOOLS</h3>
            <p>
              Sketch, Cinema4D, AfterEffects, Mixamo, 8thWall, Voice Recogition
              API
            </p>
          </div>
          <div className="typebox">
            <h3>TIME</h3>
            <p>June 2019 - August 2019 ( 3 months )</p>
          </div>
        </div>

        <div className="quote">
          <h2>
            {" "}
            An interactive and accessible AR experience that actually deepens
            our engagement with stories.
          </h2>
        </div>
      </div>
    );
  }
}

export default QuoteSection;

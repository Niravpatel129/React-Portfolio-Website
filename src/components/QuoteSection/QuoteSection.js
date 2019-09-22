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
              Sketch, Cinema4D, AfterEffects, Mixamo, 8thWall, Voice Recogition
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
        </div>

        <div className="quote">
          <h2 className="quote-text">
            An interactive and accessible AR experience that actually deepens
            our engagement with stories.
          </h2>
        </div>
        <div className="typeboxes">
          <div className="typebox1">
            <h3>1. OPPROTUNITIES</h3>
            <p>
              Building an experience that blends analog and digital in a clever
              and meaningful way.
            </p>
          </div>
          <div className="typebox2">
            <h3>2. ENGAGMENT</h3>
            <p>
              Create a storytelling experience that allows families to have a
              deeper connection with stories by engaging more of their senses.
            </p>
          </div>
          <div className="typebox3">
            <h3>3. COLLABORATION</h3>
            <p>
              Generate a product that encourages families to better connect with
              each other.
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default QuoteSection;

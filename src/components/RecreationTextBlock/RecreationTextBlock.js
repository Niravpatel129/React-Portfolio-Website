import React, { Component } from "react";

import "./RecreationTextBlock.scss";

class RecreationTextBlock extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="RecreationTextBlock">
        <h1>Recreation Centre</h1>
        <div className="text1">
          <h2>TYPE</h2>
          <h3>UI/UX, Product, Website</h3>
        </div>
        <div className="text1">
          <h2>TOOLS</h2>
          <h3>Sketch and Invision</h3>
        </div>
        <div className="text1">
          <h2>TIME</h2>
          <h3>November 2018 - February 2019 ( 4 months )</h3>
        </div>

        <div className="quote">
          How can I help parents find the perfect program for their child?{" "}
        </div>

        <div className="text3">
          <h2>PERSONAL GOALS</h2>
          <p>
            My first goal is to learn to conduct and analyze user research on my
            own. To which then sort said research and design flowcharts,
            wireframes and the final product from it.
          </p>
        </div>
        <div className="text3">
          <h2>DESIGN GOALS</h2>
          <p>
            Design goals for this redesign is redefining the user experience of
            Guelph’s recreational website. Design a anti-human experience in the
            website. To create trust and functionality through this product.
          </p>
        </div>
      </div>
    );
  }
}

export default RecreationTextBlock;

import React, { Component } from "react";

import "./ExplorationFullScreen.scss";

import image from "./GuelphRec.png";

class RecreationTitlePage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="RecreationTitlePage">
        <img
          className="TitlePage"
          src={this.props.imageProp || image}
          alt={this.props.imageProp || image}
        />
      </div>
    );
  }
}

export default RecreationTitlePage;

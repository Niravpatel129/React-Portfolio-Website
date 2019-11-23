import React, { Component } from "react";
import "./RecreationFullScreenMedia.scss";

class RecreationFullScreenMedia extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { image } = this.props;
    return (
      <div className="RecreationFullScreenMedia">
        <img src={image} alt={image} />
      </div>
    );
  }
}

export default RecreationFullScreenMedia;

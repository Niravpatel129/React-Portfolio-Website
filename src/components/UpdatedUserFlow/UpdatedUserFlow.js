import React, { Component } from "react";
import image from "./storytale-userflow.svg";

import "./UpdatedUserFlow.scss";

class UpdatedUserFlow extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="UpdatedUserFlow">
        <h4>User Flow</h4>

        <img src={image} alt={image}></img>
      </div>
    );
  }
}

export default UpdatedUserFlow;

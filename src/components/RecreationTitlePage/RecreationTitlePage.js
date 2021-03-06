import React, { Component } from "react";

import "./RecreationTitlePage.scss";

import image from "./GuelphRec.png";

class RecreationTitlePage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    console.log(this.props);
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

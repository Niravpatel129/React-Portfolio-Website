import React, { Component } from "react";

import "./Vimeo.scss";

class Vimeo extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="Vimeo">
        <iframe
          src={this.props.URL || "https://player.vimeo.com/video/265523385"}
          width="840"
          title="VimeoVideo"
          height="400"
          frameBorder="0"
          allow="autoplay; fullscreen"
          allowFullScreen
        ></iframe>
      </div>
    );
  }
}

export default Vimeo;

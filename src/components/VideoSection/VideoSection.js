import React, { Component } from "react";
import video from "../../Videos/Tutorial.mp4";
import "./VideoSection.scss";

class VideoSection extends Component {
  constructor(props) {
    super(props);
    this.state = { videoAutoPlaying: "False" };
  }
  render() {
    return (
      <div className="VideoSection">
        <video width="722" controls>
          <source src={video} type="video/mp4" />
          Your browser does not support HTML5 video.
        </video>
      </div>
    );
  }
}

export default VideoSection;

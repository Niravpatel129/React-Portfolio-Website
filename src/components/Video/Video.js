import React, { Component } from "react";
import PropTypes from "prop-types";

import "./Video.scss";
class Video extends Component {
  constructor(props) {
    super(props);
    this.state = { videoAutoPlaying: "False" };
    this.playButtonClassNames = "newplaybutton";
  }

  playVideo() {
    if (this.state.videoAutoPlaying === "True") {
      this.setState({ videoAutoPlaying: "False" });
      this.playButtonClassNames = "newplaybutton m-fadeIn";

      this.refs.vidRef.pause();
    } else {
      this.setState({ videoAutoPlaying: "True" });
      this.playButtonClassNames = "newplaybutton m-fadeOut";

      this.refs.vidRef.play();
    }
  }

  render() {
    return (
      <div className="Video">
        <video
          loop={true}
          className="videoBoxComponent"
          ref="vidRef"
          onClick={this.playVideo.bind(this)}
        >
          <source src={this.props.video} type="video/mp4" />
        </video>
        <div
          className={this.playButtonClassNames}
          ref="vidButtonRef"
          onClick={this.playVideo.bind(this)}
        ></div>
      </div>
    );
  }
}

Video.propTypes = {
  video: PropTypes.string.isRequired
};

export default Video;

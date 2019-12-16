import React, { Component } from "react";
import "./VideoSection.scss";

class VideoSection extends Component {
  constructor(props) {
    super(props);
    this.state = { videoAutoPlaying: "False" };
    this.playButtonClassNames = "playpause";
  }

  playVideo() {
    if (this.state.videoAutoPlaying === "True") {
      this.setState({ videoAutoPlaying: "False" });
      this.playButtonClassNames = "playpause m-fadeIn";

      this.refs.vidRef.pause();
    } else {
      this.setState({ videoAutoPlaying: "True" });
      this.playButtonClassNames = "playpause m-fadeOut";

      this.refs.vidRef.play();
    }
  }

  render() {
    return (
      <div className="VideoSection">
        <iframe
          title="video"
          src="https://player.vimeo.com/video/355413664"
          width="640"
          height="480"
          frameBorder="0"
          allow="autoplay; fullscreen"
          allowFullScreen
        ></iframe>
      </div>
    );
  }
}

export default VideoSection;

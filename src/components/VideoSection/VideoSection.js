import React, { Component } from "react";
import video from "../../Videos/Tutorial.mp4";
import "./VideoSection.scss";

class VideoSection extends Component {
  constructor(props) {
    super(props);
    this.state = { videoAutoPlaying: "False" };
    this.playButtonClassNames = "playpause";
  }

  playVideo() {
    console.log(this.refs.vidButtonRef);
    if (this.state.videoAutoPlaying === "True") {
      this.setState({ videoAutoPlaying: "False" });
      console.log("pause");
      this.playButtonClassNames = "playpause m-fadeIn";

      this.refs.vidRef.pause();
    } else {
      this.setState({ videoAutoPlaying: "True" });
      this.playButtonClassNames = "playpause m-fadeOut";

      console.log("play");
      this.refs.vidRef.play();
    }
  }

  render() {
    return (
      <div className="wrapper">
        <video
          loop={true}
          className="video"
          ref="vidRef"
          onClick={this.playVideo.bind(this)}
        >
          <source src={video} type="video/mp4" />
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

export default VideoSection;

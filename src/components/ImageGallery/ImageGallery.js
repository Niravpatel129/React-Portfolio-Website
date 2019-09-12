import React from "react";
import "./ImageGallery.scss";
import box1 from "./box1.svg";
import box2 from "./box2.svg";
import box3 from "./box3.svg";

// import video from "../../Videos/Tutorial.mp4";
// import ipad from "./Rectangle.svg";

class ImageGallery extends React.Component {
  constructor(props) {
    super(props);
    this.state = { videoAutoPlaying: "False" };
    this.playButtonClassNames = "videoPlayer";
  }

  playVideo() {
    console.log(this.refs.vidButtonRef);
    if (this.state.videoAutoPlaying === "True") {
      this.setState({ videoAutoPlaying: "False" });
      console.log("pause");
      this.playButtonClassNames = "videoPlayer m-fadeIn";

      this.refs.vidRef.pause();
    } else {
      this.setState({ videoAutoPlaying: "True" });
      this.playButtonClassNames = "m-fadeOut";

      console.log("play");
      this.refs.vidRef.play();
    }
  }

  render() {
    return (
      <div className="ImageGallery">
        <h4>
          Visual <br></br>Design
        </h4>
        <img src={box1} alt={box1}></img>
        <img src={box2} alt={box1}></img>
        <img src={box3} alt={box3}></img>

        {/* <div className={this.playButtonClassNames}>
          <video
            src={video}
            ref="vidRef"
            onClick={this.playVideo.bind(this)}
          ></video>
          <div
            className="playpause"
            ref="vidButtonRef"
            onClick={this.playVideo.bind(this)}
          ></div>
        </div> */}
      </div>
    );
  }
}

export default ImageGallery;

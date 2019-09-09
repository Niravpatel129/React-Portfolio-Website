import React, { Component } from "react";
import "./InformationComponent.scss";
import video from "../../Videos/Tutorial.mp4";
import font from "../fonts/MaisonNeue-Light.otf";

console.log(font);
class InformationComponent extends Component {
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
      <div className="InformationComponent">
        <h1 className="quote">
          Storytelling between parent and child is a fundamental human
          experience that often carry a deeper message that the child can
          reflect on later in life.{" "}
        </h1>
        <div className="videoboxmodel">
          <div className="how">
            <h3>How</h3>
            <p>
              The experience takes place between a parent and their child on a
              tablet. The parent or child selects a story they want to read from
              the story selection page. <br></br>
              <br></br>The app keeps track of what’s being read and listens for
              key words. When a pre-specified keyword is said (e.g. “cow”), a
              relevant 3D model appears in AR to which the users will be able to
              interact with. <br></br>
              <br></br>
              Parents or children can then have simple interactions with the 3D
              model. For example, they can tap a cow to hear it “moo”.
            </p>
          </div>
          <div className="videoBoxContainer">
            <video
              loop={true}
              className="videoBoxComponent"
              ref="vidRef"
              onClick={this.playVideo.bind(this)}
            >
              <source src={video} type="video/mp4" />
            </video>
            {/* <div
              className={this.playButtonClassNames}
              ref="vidButtonRef"
              onClick={this.playVideo.bind(this)}
            ></div> */}
          </div>
        </div>
        <div className="bottomblock">
          <div className="paragraph1">
            <h3>Augmented Reality</h3>
            <p>
              There is a narrative potential in using AR to tell stories. Rather
              than having stories take shape in a book, the story is instead
              placed in their own space.<br></br> <br></br>This creates a more
              realistic and seamless experience by using the lens of the device.
            </p>
          </div>
          <div className="paragraph2">
            <h3>Voice Recognition</h3>
            <p>
              Allows for the parents to be apart of the story experience with
              their child. Dictation can also help kids who struggle with
              reading and writing.
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default InformationComponent;

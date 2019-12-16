import React from "react";
import "./ImageGallery.scss";
import box1 from "./storytale-image.1.png";
import box2 from "./storytale-image.2.png";
import box3 from "./storytale-image.3.png";

import "react-responsive-carousel/lib/styles/carousel.min.css";

class ImageGallery extends React.Component {
  constructor(props) {
    super(props);
    this.state = { videoAutoPlaying: "False" };
    this.playButtonClassNames = "videoPlayer";
  }

  render() {
    return (
      <div className="ImageGallery">
        <h4>
          Visual <br></br>Design
        </h4>
        <img src={box1} alt={box1}></img>
        <img className="image2" src={box2} alt={box2}></img>
        <img src={box3} alt={box3}></img>
      </div>
    );
  }
}

export default ImageGallery;

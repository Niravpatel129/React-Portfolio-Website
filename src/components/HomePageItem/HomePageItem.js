import React, { Component } from "react";
import { Link } from "react-router-dom";

import ScrollAnimation from "react-animate-on-scroll";

import image1 from "./Thumbnail-1.jpg";
import image2 from "./Thumbnail-2.jpg";
import image3 from "./Thumbnail-3.jpg";
import image4 from "./Thumbnail-4.jpg";

import arrow from "./arrow.svg";

import "./HomePageItem.scss";

class HomePageItem extends Component {
  render() {
    return (
      <React.Fragment>
        <ScrollAnimation animateIn="fadeIn">
          <div className="HomePageItem">
            <img className="imageBlock" src={image1} alt={image1}></img>
            <div className="ContentBlock">
              <h1>01</h1>
              <div className="content">
                <div className="captions">
                  <h3>AUGMENTED REALITY</h3>
                  <h3>VOICE RECOGINITION</h3>
                  <h3>WEBSITE</h3>
                </div>
                <h2>
                  StoryTale - <br></br>Interactive Storytelling
                </h2>
                <p>
                  An interactive and accessible AR experience that actually
                  deepens our engagement with stories.
                </p>
                <Link
                  onClick={() => {
                    window.scrollTo(0, 0);
                  }}
                  to="/storytale"
                >
                  <div className="viewcasestudy">
                    VIEW CASESTUDY{" "}
                    <img className="arrow" src={arrow} alt={arrow}></img>
                  </div>
                </Link>
              </div>
            </div>
          </div>
          <div className="HomePageItem">
            <img className="imageBlock" src={image2} alt={image2}></img>
            <div className="ContentBlock">
              <h1>02</h1>
              <div className="content">
                <div className="captions">
                  <h3>
                    WEBSITE <br></br>DESIGN
                  </h3>
                  <h3>UI/UX</h3>
                  <h3>PRODUCT</h3>
                </div>
                <h2>Recreational Website</h2>
                <p>
                  Redesigning a recreational platform for my hometown. An
                  exploration into it’s users and creating a better journey for
                  those using the site.
                </p>
                <Link
                  onClick={() => {
                    window.scrollTo(0, 0);
                  }}
                  to="/recreation"
                >
                  <div className="viewcasestudy">
                    VIEW CASESTUDY{" "}
                    <img className="arrow" src={arrow} alt={arrow}></img>
                  </div>
                </Link>
              </div>
            </div>
          </div>
          <div className="HomePageItem">
            <img className="imageBlock" src={image3} alt={image3}></img>
            <div className="ContentBlock">
              <h1>03</h1>
              <div className="content">
                <div className="captions">
                  <h3>
                    APP <br></br>DESIGN
                  </h3>
                  <h3>UI/UX</h3>
                  <h3>PRODUCT</h3>
                </div>
                <h2>Google Travel App</h2>
                <p>
                  Focusing on features that Google already has and creating a
                  better focus on it. Targeting peopel who want to create
                </p>
                <Link
                  onClick={() => {
                    window.scrollTo(0, 0);
                  }}
                  to="/"
                >
                  <div className="viewcasestudy">
                    VIEW CASESTUDY{" "}
                    <img className="arrow" src={arrow} alt={arrow}></img>
                  </div>
                </Link>
              </div>
            </div>
          </div>
          <div className="HomePageItem">
            <img className="imageBlock" src={image4} alt={image4}></img>
            <div className="ContentBlock">
              <h1>04</h1>
              <div className="content">
                <div className="captions">
                  <h3>
                    VISUAL <br></br>DESIGN
                  </h3>
                  <h3>CINEMA4D</h3>
                  <h3>BLENDER</h3>
                </div>
                <h2>3D Exploration</h2>
                <p>
                  A series of images and animations that pushed my ability to
                  learn programs such as Cinema4d and Blender.
                </p>
                <Link
                  onClick={() => {
                    window.scrollTo(0, 0);
                  }}
                  to="/exploration"
                >
                  <div className="viewcasestudy">
                    IN PROGRESS{" "}
                    <img className="arrow" src={arrow} alt={arrow}></img>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </ScrollAnimation>
      </React.Fragment>
    );
  }
}

export default HomePageItem;

import React, { Component } from "react";
import { Link } from "react-router-dom";

import "./HomeGroup.scss";

import image1 from "./Thumbnail-1.jpg";
import image2 from "./Thumbnail-2.jpg";
import image3 from "./Thumbnail-3.jpg";
import image5 from "./Thumbnail-4.jpg";

import arrow from "./arrow.svg";

class HomeGroup extends Component {
  render() {
    return (
      <div className="HomeGroup">
        <div className="SectionBlock">
          <img src={image1} alt="1"></img>
          <div className="captions">
            <h3>
              AUGMENTED <br></br> REALITY
            </h3>
            <h3>
              VOICE <br></br>RECOGNITION
            </h3>
            <h3>WEBSITE</h3>
          </div>
          <div className="title">
            <h1>01 </h1>{" "}
            <h1 className="titletext">
              StoryTale - <br></br>Interactive Storytelling
            </h1>
            <p>
              An interactive and accessible AR experience that actually deepens
              our engagement with stories.
            </p>
            <Link to="/storytale">
              <div className="viewcasestudy">
                VIEW THE CASE STUDY{" "}
                <img className="arrow" src={arrow} alt={arrow}></img>
              </div>{" "}
            </Link>
          </div>
        </div>
        <div className="SectionBlock">
          <img src={image2} alt="2"></img>
          <div className="captions">
            <h3>
              WEBSITE <br></br>DESIGN
            </h3>
            <h3 className="ui">UI / UX</h3>
            <h3>PRODUCT</h3>
          </div>
          <div className="title">
            <div className="title">
              <h1>02 </h1>{" "}
              <h1 className="titletext">
                Recreational<br></br> Website
              </h1>
              <p>
                The current platform is also in need of a new visual design and
                a reorgainzed information architecture as the current one is
                inadequate.
              </p>
              <Link to="/recreation">
                <div className="viewcasestudy">
                  VIEW THE CASE STUDY{" "}
                  <img className="arrow" src={arrow} alt={arrow}></img>
                </div>
              </Link>
            </div>{" "}
          </div>
        </div>
        <div className="SectionBlock">
          <img src={image3} alt="3"></img>
          <div className="captions">
            <h3>
              WEBSITE <br></br>DESIGN
            </h3>
            <h3 className="ui">UI / UX</h3>
            <h3>PRODUCT</h3>
          </div>
          <div className="title">
            <div className="title">
              <h1>03 </h1>{" "}
              <h1 className="titletext">
                Google Travel<br></br> App
              </h1>
              <p>
                Conceptualizing an app for free going travellers that suggests
                stops while in the area.
              </p>
              <Link to="/storytale">
                <div className="viewcasestudy">
                  VIEW THE CASE STUDY{" "}
                  <img className="arrow" src={arrow} alt={arrow}></img>
                </div>{" "}
              </Link>
            </div>{" "}
          </div>
        </div>

        <div className="SectionBlock">
          <img src={image5} alt="5"></img>
          <div className="captions">
            <h3>
              VISUAL <br></br>DESIGN
            </h3>
            <h3 className="ui">CINEMA4D</h3>
            <h3>BLENDER</h3>
          </div>
          <div className="title">
            <div className="title">
              <h1>04 </h1>{" "}
              <h1 className="titletext">
                3D <br></br>EXPLORATION
              </h1>
              <p>
                A series of images that pushed my ability to learn programs such
                as Cinema4d and Blender.
              </p>
              <Link to="/storytale">
                <div className="viewcasestudy">
                  VIEW THREE DEE{" "}
                  <img className="arrow" src={arrow} alt={arrow}></img>
                </div>{" "}
              </Link>
            </div>{" "}
          </div>
        </div>
      </div>
    );
  }
}

export default HomeGroup;

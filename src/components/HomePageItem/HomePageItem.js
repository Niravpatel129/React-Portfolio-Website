import React, { Component } from "react";
import { Link } from "react-router-dom";

import image1 from "./image1.png";
import arrow from "./arrow.svg";

import "./HomePageItem.scss";

class HomePageItem extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="HomePageItem">
          <img src={image1} alt={image1}></img>
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
          <img src={image1} alt={image1}></img>
          <div className="ContentBlock">
            <h1>02</h1>
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
          <img src={image1} alt={image1}></img>
          <div className="ContentBlock">
            <h1>03</h1>
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
          <img src={image1} alt={image1}></img>
          <div className="ContentBlock">
            <h1>04</h1>
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
      </React.Fragment>
    );
  }
}

export default HomePageItem;

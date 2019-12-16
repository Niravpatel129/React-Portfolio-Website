import React, { Component } from "react";

import "./HomeAbout.scss";

class HomeAbout extends Component {
  state = {};
  render() {
    return (
      <div className="HomeAbout">
        <p>
          {" "}
          Michelle has currently finished a design internship @{" "}
          <span className="underlined">
            <a href="https://we3.jam3.com/home">We3</a>
          </span>
          <span className="small">/2019</span>. Before that, she had done
          freelance work for{" "}
          <span className="underlined">
            <a href="https://www.jam3.com/">Jam3</a>
          </span>
          <span className="small">/2019</span> and had the pleasure of interning
          @{" "}
          <span className="underlined">
            <a href="http://thegardencollective.com/">The Garden Collective</a>
          </span>
          <span className="small">/2017.</span>
        </p>
      </div>
    );
  }
}

export default HomeAbout;

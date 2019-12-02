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
          <span className="underlined">We3</span>
          <span className="small">/2019</span>. Before that, she had done
          freelance work for <span className="underlined">Jam3</span>
          <span className="small">/2019</span> and had the pleasure of interning
          @ <span className="underlined">The Garden Collective</span>
          <span className="small">/2017.</span>
        </p>
      </div>
    );
  }
}

export default HomeAbout;

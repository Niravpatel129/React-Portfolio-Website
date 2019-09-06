import React from "react";

import "./Toolbar.scss";

const Toolbar = props => (
  <div className="Toolbar">
    <ul>
      <li>
        <a className="name" href="#home">
          MICHELLE VU
        </a>
      </li>
      <li>
        <a className="toronto" href="#news">
          TORONTO
        </a>
      </li>
      <li className="updated">
        <a href="#contact">LAST UPDATED: 07/26/19</a>
      </li>
      <li>
        <a className="about" href="#about">
          ABOUT
        </a>
      </li>
      <li>
        <a className="contact" href="#news">
          CONTACT
        </a>
      </li>
    </ul>
  </div>
);

export default Toolbar;

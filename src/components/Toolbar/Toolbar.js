import React from "react";

import "./Toolbar.scss";

const Toolbar = props => (
  <div className="Toolbar">
    <ul className={props.theme}>
      <li className="name">
        <a href="/" className="name">
          MICHELLE VU
        </a>
      </li>
      <li>
        <a href="/storytale" className="toronto">
          TORONTO
        </a>
      </li>
      <li className="updated">
        <a href="/storytale">LAST UPDATED: 07/26/19</a>
      </li>
      <li className="about">
        <a href="/storytale" className="about">
          ABOUT
        </a>
      </li>
      <li>
        <a href="/storytale" className="contact">
          CONTACT
        </a>
      </li>
    </ul>
  </div>
);

export default Toolbar;

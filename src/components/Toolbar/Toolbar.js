import React from "react";
import { Link } from "react-router-dom";

import "./Toolbar.scss";

const Toolbar = props => (
  <div className="Toolbar">
    <ul className={props.theme}>
      <li className="name">
        <Link to="/" className="name">
          MICHELLE VU
        </Link>
      </li>
      <li>
        <Link to="/storytale">TORONTO</Link>
      </li>
      <li className="updated">
        <Link to="/storytale">LAST UPDATED: 07/26/19</Link>
      </li>
      <li
        onClick={() => {
          // scrollToComponent(this.refs.name);
        }}
        className="about"
      >
        <a href="#HomeConclusion" className="about">
          ABOUT
        </a>
      </li>
      <li>
        <Link to="/storytale" className="contact">
          CONTACT
        </Link>
      </li>
    </ul>
  </div>
);

export default Toolbar;

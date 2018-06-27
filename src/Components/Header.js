import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import logo from "./logo.png";

export class Header extends Component {
  render() {
    return (
      <nav className="" role="banner" aria-label="site-navigation">
        <div className="bottom-border">
          <header className="site-header  steps_container contain">
            {/* Nav toggle class here is very important for iOS!!!! */}
            <button
              className="navbar-toggle collapsed"
              data-toggle="collapse"
              data-target="#info"
            >
              <i className="material-icons md-36 firebrick">info</i>
            </button>
            <div className="vertical_divider" />
            <NavLink to="/order">
              <img src={logo} alt="logo" className="center-block banner" />
            </NavLink>
            <div className="vertical_divider" />
            <button
              className="navbar-toggle collapsed"
              data-toggle="collapse"
              data-target="#contact"
            >
              <i className="material-icons md-36 firebrick">perm_phone_msg</i>
            </button>
          </header>
        </div>
        <div
          className="collapse navbar-collapse  top-border bottom-border"
          id="contact"
        >
          <ul className="nav navbar-nav center">
            <li className="">
              <a href="tel:+2348084354792">
                Call Us<span className="sr-only">(current)</span>
              </a>
            </li>
            <li>
              <a href="mailto:support@spikandspan.net">Email Support</a>
            </li>
          </ul>
        </div>
        <div
          className="collapse navbar-collapse top-border bottom-border"
          id="info"
        >
          <ul className="nav navbar-nav center">
            <li className="">
              <NavLink to="/order">
                ORDER<span className="sr-only">(current)</span>
              </NavLink>
            </li>
            <li className="">
              <NavLink to="/about">
                ABOUT<span className="sr-only">(current)</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/faqs">FAQs</NavLink>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

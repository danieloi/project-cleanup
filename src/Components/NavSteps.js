import React from "react";
import { NavLink, Link } from "react-router-dom";

export const NavSteps = ({ display }) => (
  <div className="">
    {display.other ? (
      <Link to="/order">
        <button className="btn-default full_width">PLACE ORDER</button>
      </Link>
    ) : (
      <div
        className="steps_container contain height_48"
        style={{ display: display.initial }}
      >
        <NavLink exact to="/order">
          {/* <button className="btn-default"> */}
          <i className="material-icons md-36">assignment</i>
          {/* </button> */}
        </NavLink>
        {/* <button disabled> */}
        <NavLink to="/appointment">
          {/* <button className="btn-default"> */}
          <i className="material-icons md-36">event_note</i>
          {/* </button> */}
        </NavLink>
        {/* </button> */}

        <NavLink to="/address">
          {/* <button className="btn-default"> */}
          <i className="material-icons md-36">pin_drop</i>
          {/* </button> */}
        </NavLink>
        <NavLink to="/summary">
          {/* <button className="btn-default"> */}
          <i className="material-icons md-36">shopping_cart</i>
          {/* </button> */}
        </NavLink>
      </div>
    )}
    <div
      className="divider bottom-border"
      style={{ display: display.initial }}
    />
  </div>
);

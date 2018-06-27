import React from "react";
import { Link } from "react-router-dom";

export const DataPage = ({ onInputChange, values }) => (
  <div className="col-sm-12 center">
    <div className="divider" />
    <h3 className="">Location & Contact</h3>
    <div className="divider" />
    <label htmlFor="address">Address</label>
    <input
      id="address"
      type="text"
      name="address"
      value={values.address}
      onChange={onInputChange}
      placeholder="Enter Address Within Abuja"
    />
    <div className="divider" />

    <label htmlFor="name">Name</label>
    <input
      id="name"
      type="text"
      name="name"
      value={values.name}
      onChange={onInputChange}
      placeholder="Enter Name"
    />
    <div className="divider" />

    <label htmlFor="phone">Phone</label>
    <input
      id="phone"
      type="tel"
      name="phone"
      value={values.phone}
      onChange={onInputChange}
      placeholder="Enter Phone Number"
    />
    <div className="divider" />

    <label htmlFor="email">Email</label>
    <input
      id="email"
      type="email"
      name="email"
      value={values.email}
      placeholder="Enter Email Address"
      onChange={onInputChange}
    />
    <div className="divider" />

    <div className="steps_container">
      <Link to="/appointment">
        <button className="btn-default nav-steps">BACK</button>
      </Link>
      <Link to="/summary">
        <button className="btn-default nav-steps">NEXT</button>
      </Link>
    </div>
  </div>
);

import React from "react";
import { Link } from "react-router-dom";
// import DatePicker from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";

export const Appointment = ({ onInputChange, values }) => (
  <div className="col-sm-12 center">
    <div className="divider" />

    <h3>Appointment</h3>
    <div className="divider" />
    <label htmlFor="date">Enter Date</label>
    {/* <h4 className='field-label'>Enter Date</h4> */}
    <input
      id="date"
      type="date"
      name="date"
      value={values.date}
      onChange={onInputChange}
      min={values.date}
    />
    {/* <DatePicker selected={values.date}  onChange={onInputChange} /> */}
    <div className="divider" />

    <label htmlFor="time">Enter Time</label>
    {/* <h4 className='field-label'>Enter Time</h4> */}
    <input
      id="time"
      type="time"
      name="time"
      value={values.time}
      onChange={onInputChange}
      min="8:00"
      max="18:00"
    />
    <div className="divider" />
    <div className="steps_container">
      <Link to="/">
        <button className="btn-default nav-steps">BACK</button>
      </Link>
      {/* <div className='divider'></div> */}

      <Link to="/address">
        <button className="btn-default nav-steps">NEXT</button>
      </Link>
    </div>
  </div>
);

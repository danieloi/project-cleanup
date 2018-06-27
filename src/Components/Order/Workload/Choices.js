import React from "react";

export const Choices = props => {
  const { values, onInputChange } = props;
  return (
    <div className="steps_container">
      <button
        className={
          "btn-default btn-service" +
          (values.service === "sanitation" ? " active" : "")
        }
        onClick={onInputChange}
        name="service"
        value="sanitation"
      >
        <i className="material-icons md-36">home</i>
        <h6>HOME</h6>
      </button>
      <button
        className={
          "btn-default btn-service" +
          (values.service === "vehicle" ? " active" : "")
        }
        onClick={onInputChange}
        name="service"
        value="vehicle"
      >
        <i className="material-icons md-36">directions_car</i>
        <h6>VEHICLE</h6>
      </button>
      <button
        className={
          "btn-default btn-service" +
          (values.service === "dry_cleaning" ? " active" : "")
        }
        onClick={onInputChange}
        name="service"
        value="dry_cleaning"
      >
        <i className="material-icons md-36">local_laundry_service</i>
        <h6>CLOTHING</h6>
      </button>
    </div>
  );
};

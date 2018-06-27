import React from "react";
import { Link } from "react-router-dom";
import { Clothing } from "./Clothing";
import { Dwelling } from "./Dwelling";
import { Vehicle } from "./Vehicle";
import { Invoice } from "./Invoice";
import { Choices } from "./Choices";

export const Workload = props => {
  const { values, onInputChange } = props;

  const renderService = service => {
    switch (service) {
      case "sanitation":
        return <Dwelling values={values} onInputChange={onInputChange} />;

      case "dry_cleaning":
        return <Clothing values={values} onInputChange={onInputChange} />;

      case "vehicle":
        return <Vehicle values={values} onInputChange={onInputChange} />;

      default:
        break;
    }
  };

  return (
    <section className="">
      <div className="col-sm-12 center main-content">
        <div className="divider " />

        <h3>Workload</h3>
        {/* <div className="divider" /> */}
        <h4 htmlFor="service">Choose A Cleaning Service</h4>
        <div className="divider" />
        <Choices values={values} onInputChange={onInputChange} />
        <div className="divider" />
        {renderService(values.service)}
        <div className="divider" />
        <Invoice values={values} />
        <div className="divider" />
        <div className="right_flex">
          <Link to="/appointment">
            <button className="btn-default nav-steps right">NEXT</button>
          </Link>
        </div>
      </div>
    </section>
  );
};

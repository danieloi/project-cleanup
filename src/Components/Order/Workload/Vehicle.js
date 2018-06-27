import React from "react";
import { Numbertron } from "./Numbertron";

export const Vehicle = props => {
  const { values, onInputChange } = props;

  return (
    <div>
      <label htmlFor="sedans">Sedans/Hatchbacks</label>
      <Numbertron name="sedans" values={values} onInputChange={onInputChange} />
      <div className="divider" />
      <label htmlFor="suvs">Pickups/SUVs</label>
      <Numbertron name="suvs" values={values} onInputChange={onInputChange} />
    </div>
  );
};

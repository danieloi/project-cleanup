import React from "react";
import { Numbertron } from "./Numbertron";

export const Clothing = props => {
  const { values, onInputChange } = props;
  return (
    <div>
      <label htmlFor="tops">Shirts/Blouses</label>
      <Numbertron name="tops" values={values} onInputChange={onInputChange} />
      <div className="divider" />
      <label htmlFor="bottoms">Trousers/Skirts</label>
      <Numbertron
        name="bottoms"
        values={values}
        onInputChange={onInputChange}
      />
    </div>
  );
};

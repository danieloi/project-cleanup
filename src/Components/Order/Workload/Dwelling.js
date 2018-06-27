import React from "react";
import { Options } from "../Options/Options";

export const Dwelling = props => {
  const { values, onInputChange } = props;
  const { bedrooms, restrooms } = values;
  console.log(`Here's the type of num ${typeof bedrooms}\n`);
  return (
    <div>
      <Options name="Bedrooms" handleClick={onInputChange} num={bedrooms} />
      <div className="divider" />
      <Options name="Restrooms" handleClick={onInputChange} num={restrooms} />
    </div>
  );
};

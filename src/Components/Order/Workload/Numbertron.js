import React from "react";

export const Numbertron = props => {
  const { name, values, onInputChange } = props;
  const lowerName = name.toLowerCase();
  return (
    <div className="flex">
      <button
        onClick={onInputChange}
        name={lowerName}
        value={values[lowerName] > 0 ? values[lowerName] - 1 : 0}
        className="btn-upDown"
      >
        <i className="material-icons">remove</i>
      </button>
      <input
        id={lowerName}
        type="number"
        name={lowerName}
        value={values[lowerName]}
        onChange={onInputChange}
        className="upDown"
      />
      <button
        onClick={onInputChange}
        value={Number(values[lowerName]) + 1}
        name={lowerName}
        className="btn-upDown"
      >
        <i className="material-icons">add</i>
      </button>
    </div>
  );
};

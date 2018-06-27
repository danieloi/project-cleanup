import React from "react";
export const Options = ({ name, handleClick, num }) => (
  <div>
    <label htmlFor={name.toLowerCase()}>{name}</label>
    {/* <h4 className='field-label'>{name}</h4> */}
    <div id={name.toLowerCase()} className="btn-group btn-group-lg">
      {Array(5)
        .fill(null)
        .map((el, i) => (
          <button
            key={i}
            type="button"
            // eslint-disable-next-line
            className={"btn btn-default" + (i == num ? " active" : " ")}
            name={name.toLowerCase()}
            value={i}
            onClick={handleClick}
          >
            {i}
          </button>
        ))}
    </div>
  </div>
);

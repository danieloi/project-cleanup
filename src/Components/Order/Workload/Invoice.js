import React from "react";

export const Invoice = props => {
  const { values } = props;
  const { hours, price } = values;
  return (
    <table>
      <tbody>
        <tr>
          <td className="data-field">Hours: </td>
          <td className="text-right">{hours} hours</td>
        </tr>
        <tr>
          <td className="data-field">Price: </td>
          <td className="text-right">{price.toLocaleString()} NGN</td>
        </tr>
      </tbody>
    </table>
  );
};

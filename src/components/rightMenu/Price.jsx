import React from "react";

const Price = ({ service, total }) => {
  return (
    <>
      <span className="flex items-center justify-between">
        <p className="text-xs text-gray-800">Service</p>
        <span className="flex font-bold text-sm">
          <button className="">+</button>
          <p className="text-primary">$</p>
          <p>{service}</p>
        </span>
      </span>
      <span className="flex items-center justify-between">
        <p className="text-md">Total</p>
        <span className="flex font-bold text-sm">
          <p className="text-primary">$</p>
          <p>{total}</p>
        </span>
      </span>
    </>
  );
};

export default Price;

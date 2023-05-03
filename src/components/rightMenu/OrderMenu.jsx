import React from "react";

const OrderMenu = ({ img, food, count, price }) => {
  return (
    <>
      <div className="flex items-center justify-between">
        <div className="flex gap-3 items-center">
          <img src={img} alt="pizza 1" className="h-12 w-12" />
          <span>
            <p className="font-semibold text-sm">{food}</p>
            <p className="text-gray-800 text-xs">x{count}</p>
          </span>
        </div>
        <span className="flex items-center font-bold">
          <button className="text-sm">+</button>
          <span className="flex text-primary text-sm">
            $<p className="text-black">{price}</p>
          </span>
        </span>
      </div>
    </>
  );
};

export default OrderMenu;

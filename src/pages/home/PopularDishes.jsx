import React from "react";

// React icons
import { IoStar, IoHeartSharp } from "react-icons/io5";

const PopularDishes = ({ discount, active, img, food, price }) => {
  return (
    <div className="bg-light rounded-xl py-4 pr-8">
      <div className="flex items-center justify-between">
        <span className="bg-red px-4 py-1 rounded-r-lg text-light text-sm">
          {discount}% off
        </span>
        <IoHeartSharp
          className={`${active ? "text-red" : "text-gray-800"}  text-xl`}
        />
      </div>
      <span className="flex items-center justify-center">
        <img src={img} alt="Beef Burger" className="w-44 lg:w-60" />
      </span>
      <div className="flex items-center pl-5 text-primary gap-1">
        <IoStar />
        <IoStar />
        <IoStar />
        <IoStar />
        <IoStar />
      </div>
      <div className="flex items-center justify-between mt-2">
        <span className="flex flex-col pl-5">
          <p className="text-sm font-semibold">{food}</p>
          <span className="flex font-bold">
            <p className="text-primary">$</p>
            {price}
          </span>
        </span>
        <span className="bg-primary py-1 px-3 rounded-lg text-light text-xl">
          +
        </span>
      </div>
    </div>
  );
};

export default PopularDishes;

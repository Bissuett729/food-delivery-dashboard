import React from "react";

// React icons
import { IoHeartSharp, IoEllipse } from "react-icons/io5";

const RecentOrder = ({ img, food, minutes, distance, price }) => {
  return (
    <div className="bg-light rounded-xl py-4 pr-8">
      <div className="flex items-center justify-end">
        <IoHeartSharp className="text-gray-800 text-xl" />
      </div>
      <span className="flex items-center justify-center">
        <img src={img} alt={food} className="w-44 lg:w-60" />
      </span>
      <div className="flex items-center justify-center mt-2">
        <span className="flex flex-col items-center gap-1 pl-5">
          <p className="text-sm font-semibold">{food}</p>
          <span className="flex font-bold">
            <p className="text-primary">$</p>
            {price}
          </span>
          <span className="flex items-center gap-1 text-sm text-gray-800/50">
            {distance} km <IoEllipse className="text-[6px]" /> {minutes} min
          </span>
        </span>
      </div>
    </div>
  );
};

export default RecentOrder;

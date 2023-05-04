import React from "react";
import { Link } from "react-router-dom";

// Icons
import {
  IoCashOutline,
  IoCash,
} from "react-icons/io5";

const WidgetCard = () => {
  return (
    <div className="bg-primary w-full md:w-[80%] lg:w-full rounded-xl px-4 py-2 lg:py-5 flex justify-around mt-5 gap-1">
      <div className="flex flex-col bg-light rounded-xl px-4 py-1 lg:py-3">
        <p className="text-xs">Balance</p>{" "}
        <p className="font-bold text-xl">$12.000</p>
      </div>
      <div className="flex gap-4 relative">
        <Link className="flex flex-col items-center gap-2">
          <div className="p-2 bg-light rounded-lg">
            <IoCashOutline />
          </div>
          <p className="text-light text-xs">Top Up</p>
        </Link>
        <Link className="flex flex-col items-center gap-2">
          <div className="p-2 bg-light rounded-lg">
            <IoCash />
          </div>
          <p className="text-light text-xs">Transfer</p>
        </Link>
      </div>
    </div>
  );
};

export default WidgetCard;

import React from "react";
// Icons
import {
  IoChevronForward,
} from "react-icons/io5";
import { GiFoodTruck } from "react-icons/gi";

const Buttons = () => {
  return (
    <>
      <button className="flex items-center justify-around text-xs font-semibold border border-primary rounded-lg bg-gray-300 w-[80%] py-2">
        <span className="p-2 bg-primary rounded-lg text-light">
          <GiFoodTruck />
        </span>
        Have a coupon code?
        <IoChevronForward />
      </button>
      <button className="bg-primary w-[80%] py-2 rounded-lg text-light font-semibold">
        Checkout
      </button>
    </>
  );
};

export default Buttons;

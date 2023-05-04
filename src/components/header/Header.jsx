import React from "react";
import { IoSearchOutline } from "react-icons/io5";


const Header = () => {
  return (
    <div className="h-full w-full grid grid-cols-1 lg:grid-cols-7 gap-2 lg:gap-0">
      <h1 className="lg:col-span-4 flex items-center justify-center lg:justify-start text-3xl font-bold">
        Hello, Miguel
      </h1>
      <div className="lg:col-span-3 flex items-center justify-center lg:justify-end">
        <span className="relative py-2 md:py-4 w-[80%] md:w-[90%] lg:w-[95%] bg-light rounded-xl">
          <IoSearchOutline className="text-2xl text-primary absolute left-2" />
          <input
            type="text"
            className="px-10 outline-none w-full"
            placeholder="What do you want eat today..."
          />
        </span>
      </div>
    </div>
  );
};

export default Header;

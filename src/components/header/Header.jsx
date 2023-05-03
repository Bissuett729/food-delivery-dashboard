import React from "react";
import { IoSearchOutline } from "react-icons/io5";


const Header = () => {
  return (
    <div className="h-full w-full grid grid-cols-1 lg:grid-cols-7 gap-2 lg:gap-0">
      <h1 className="lg:col-span-4 flex items-center justify-center lg:justify-start text-3xl font-bold">
        Hello, Miguel
      </h1>
      <div className="lg:col-span-3 flex items-center justify-center lg:justify-end">
        <span className="relative py-2 w-full lg:w-[60%] bg-light rounded-md shadow-md">
          <IoSearchOutline className="text-xl text-primary absolute" />
          <input
            type="text"
            className="px-6 outline-none w-full"
            placeholder="What do you want eat today..."
          />
        </span>
      </div>
    </div>
  );
};

export default Header;

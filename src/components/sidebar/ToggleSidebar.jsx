import React from "react";
// Icons
import { RiCloseCircleFill } from "react-icons/ri";
import { IoFastFoodSharp } from "react-icons/io5";

const ToggleSidebar = ({ toggleSidebar, showMenu }) => {
  return (
    <button
      onClick={toggleSidebar}
      className="block lg:hidden fixed bottom-4 right-4 bg-primary p-2 text-white rounded-lg text-2xl md:text-3xl z-40"
    >
      {showMenu ? <RiCloseCircleFill /> : <IoFastFoodSharp />}
    </button>
  );
};

export default ToggleSidebar;

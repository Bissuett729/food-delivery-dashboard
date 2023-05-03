import React from "react";
// Icons
import { RiCloseCircleFill } from "react-icons/ri";
import { IoFastFoodSharp } from "react-icons/io5";

const ToggleRightMenu = ({ toggleRightMenu, showRightMenu }) => {
  return (
    <button
      onClick={toggleRightMenu}
      className="block lg:hidden fixed top-4 left-4 bg-primary p-2 text-white rounded-full text-2xl md:text-3xl z-39"
    >
      {showRightMenu ? <RiCloseCircleFill /> : <IoFastFoodSharp />}
    </button>
  );
};

export default ToggleRightMenu;

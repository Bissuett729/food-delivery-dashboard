import React from "react";
// Icons
import { RiCloseCircleFill } from "react-icons/ri";
import { HiShoppingCart } from "react-icons/hi";


const ToggleRightMenu = ({ toggleRightMenu, showRightMenu }) => {
  return (
    <button
      onClick={toggleRightMenu}
      className="block lg:hidden fixed top-2 left-4 bg-primary p-1 md:p-2 text-white rounded-lg text-2xl md:text-3xl z-39 transition-all"
    >
      {showRightMenu ? <RiCloseCircleFill /> : <HiShoppingCart />}
    </button>
  );
};

export default ToggleRightMenu;

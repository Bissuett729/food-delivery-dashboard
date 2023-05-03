import React from "react";
import { Link } from "react-router-dom";

const MenuOption = ({ text, icon, active }) => {
  return (
    <Link
      to="/"
      className={`flex items-center text-gray-800 font-medium px-8 py-4 gap-5  rounded-xl transition-colors ${
        active ? "bg-primary text-light" : "hover:bg-primary hover:text-light"
      }`}
    >
      {icon} {text}
    </Link>
  );
};

export default MenuOption;

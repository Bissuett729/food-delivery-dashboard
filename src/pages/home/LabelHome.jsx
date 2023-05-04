import React from "react";

// React icons
import { IoChevronForward } from "react-icons/io5";

const LabelHome = ({ label }) => {
  return (
    <div className="flex items-center justify-between">
      <p className="text-xl font-bold mb-4 gap-2">{label}</p>
      <span className="flex items-center gap-2">
        <p className="text-primary text-sm">View all</p>
        <IoChevronForward className="text-primary text-xs" />
      </span>
    </div>
  );
};

export default LabelHome;

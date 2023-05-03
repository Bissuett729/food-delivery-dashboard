import React from "react";

// Icons
import {
  IoLocationOutline,
} from "react-icons/io5";

const Street = () => {
  return (
    <>
      <h3 className="text-gray-800 mb-1">Your Address</h3>
      <div className="flex justify-between mb-2">
        <span className="flex items-center">
          <IoLocationOutline className="text-primary" />
          <p>Elm Street, 23</p>{" "}
        </span>
        <button className="text-primary border border-primary px-4 rounded-lg">
          Change
        </button>
      </div>
      <p className="text-gray-800 text-xs mb-3">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda
        quidem quisquam, vero illum cum voluptatibus.
      </p>
      <span className="flex gap-2">
        <button className="border border-gray-800 rounded-lg px-3 text-sm">
          Add Details
        </button>
        <button className="border border-gray-800 rounded-lg px-3 text-sm">
          Add Note
        </button>
      </span>
    </>
  );
};

export default Street;

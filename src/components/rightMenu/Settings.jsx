import React from "react";
import { Link } from "react-router-dom";

// Icons
import {
  IoBagHandleOutline,
  IoNotificationsOutline,
  IoSettings,
} from "react-icons/io5";

const Settings = () => {
  return (
    <>
      <span className="flex gap-4 text-xl">
        <Link className="relative">
          <span className="p-[3px] bg-primary rounded-full absolute -top-[4px] -right-1"></span>
          <IoBagHandleOutline />
        </Link>
        <Link className="relative">
          <span className="p-[3px] bg-primary rounded-full absolute -top-[4px] -right-1"></span>
          <IoNotificationsOutline />
        </Link>
        <Link className="relative">
          <IoSettings className="absolute -top-2 -right-2 text-xs text-primary" />
          <IoSettings />
        </Link>
      </span>
      <img
        src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg"
        alt="person 1"
        className="w-10 h-10 rounded-lg"
      />
    </>
  );
};

export default Settings;

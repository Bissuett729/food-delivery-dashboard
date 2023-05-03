import React, { useState } from "react";
import { Outlet } from "react-router-dom";
// Components
import Sidebar from "../components/sidebar/Sidebar";
import RightMenu from "../components/rightMenu/RightMenu";
import ToggleSidebar from "../components/sidebar/ToggleSidebar";
import ToggleRightMenu from "../components/rightMenu/ToggleRightMenu";
import Header from "../components/header/Header";

const DefaultLayout = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [showRightMenu, setShowRightMenu] = useState(false);

  const toggleSidebar = () => {
    setShowMenu(!showMenu);
  };
  const toggleRightMenu = () => {
    setShowRightMenu(!showRightMenu);
  };

  return (
    <>
      <div className="grid grid-cols-12 min-h-screen w-screen bg-gray-300">
        <div
          className={`col-span-1 lg:col-span-2 bg-light fixed lg:static top-0 w-[80%] md:w-[60%] lg:w-full h-full overflow-y-scroll transition-all z-50 ${
            showMenu ? "-left-0" : "-left-full"
          } shadow-lg`}
        >
          <Sidebar />
        </div>
        <div className="lg:col-span-8 h-full w-screen lg:w-full p-2 lg:p-5">
          <div className="h-[10vh] w-full">
            <Header />
          </div>
          <div className="">
            <Outlet />
          </div>
        </div>
        <div
          className={`col-span-1 lg:col-span-2 fixed lg:static right-0 w-[80%] md:w-[60%] lg:w-full h-full overflow-y-scroll bg-light transition-all ${
            showRightMenu ? "-right-0" : "-right-full"
          } shadow-lg`}
        >
          <RightMenu />
        </div>
      </div>
      {/* Button Menu Movil */}
      <ToggleSidebar toggleSidebar={toggleSidebar} showMenu={showMenu} />
      <ToggleRightMenu
        toggleRightMenu={toggleRightMenu}
        showRightMenu={showRightMenu}
      />
    </>
  );
};

export default DefaultLayout;

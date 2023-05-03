import React from "react";
import { Link } from "react-router-dom";
// Icons
import { IoRestaurantSharp, IoFastFoodSharp, IoChatboxEllipsesSharp, IoHeartCircleSharp, IoReceipt, IoWallet, IoSettings, IoKeypad } from "react-icons/io5";
import MenuOption from "./MenuOption";


const Sidebar = () => {
  return (
    <div className="px-12 py-8">
      {/* Logo */}
      <div className="flex items-center justify-center mb-14">
        <p className="text-3xl font-bold">GoMeal</p>
        <span className="text-3xl font-extrabold text-primary">.</span>
      </div>
      <div className="flex flex-col gap-2 mb-10">
        <MenuOption text="Dashboard" active icon={<IoRestaurantSharp className="text-xl"/>} />
        <MenuOption text="Food Order" icon={<IoFastFoodSharp className="text-xl"/>} />
        <MenuOption text="Favorite" icon={<IoHeartCircleSharp className="text-xl"/>} />
        <MenuOption text="Message" icon={<IoChatboxEllipsesSharp className="text-xl"/>} />
        <MenuOption text="Order History" icon={<IoReceipt className="text-xl"/>} />
        <MenuOption text="Bills" icon={<IoWallet className="text-xl"/>} />
        <MenuOption text="Settings" icon={<IoSettings className="text-xl"/>} />
      </div>
      <div className="bg-primary flex flex-col px-4 py-6 rounded-xl gap-3 relative">
        <span className="flex justify-between text-light font-semibold"><p>Upgrade your <br /> Account to Get Free <br /> Voucher</p><IoKeypad className="text-2xl" /></span>
        <button className="bg-light p-2 rounded-xl font-semibold w-24">Upgrade</button>
        <span className="bg-light/40 absolute w-24 h-24 bottom-0 right-0 rounded-tl-full"></span>
      </div>
    </div>
  );
};

export default Sidebar;

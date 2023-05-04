import React from "react";
// Food images
import FishPizza from "../../assets/food/FishPizza.png";
import VeganPizza from "../../assets/food/VeganPizza.png";
import CheeseBurger from "../../assets/food/CheeseBurger.png";
// Components
import Settings from "./Settings";
import WidgetCard from "./WidgetCard";
import Street from "./Street";
import OrderMenu from "./OrderMenu";
import Price from "./Price";
import Buttons from "./Buttons.jsx";

const RightMenu = () => {
  return (
    <div className="px-3 py-6 w-full">
      <div className="flex items-center justify-between w-full mb-4">
        <Settings />
      </div>
      <span className="font-bold">Your Balance</span>
      <div className="flex flex-col items-center">
        <WidgetCard />
      </div>
      <div className="mt-5 mb-5">
        <Street />
      </div>
      <p className="font-bold">Order Menu</p>
      <div className="flex flex-col gap-4 border-b py-4 border-gray-800/30 overflow-y-scroll">
        <OrderMenu img={FishPizza} food="Pepperoni Pizza" count="1" price="5.59" />
        <OrderMenu img={CheeseBurger} food="Cheese Burger" count="1" price="5.59" />
        <OrderMenu img={VeganPizza} food="Vegan Pizza" count="1" price="5.59" />
      </div>
      <div className="mt-2 flex flex-col gap-3 mb-10">
        <Price service="1.00" total="202.00" />
      </div>
      <div className="flex flex-col items-center gap-4">
        <Buttons />
      </div>
    </div>
  );
};

export default RightMenu;

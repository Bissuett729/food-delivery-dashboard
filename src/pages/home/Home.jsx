import React from "react";

// icons Food
import Baked from "../../assets/icons/Baked.png";
import Burger from "../../assets/icons/Burger.png";
import Chicken from "../../assets/icons/Chicken.png";
import Coffee from "../../assets/icons/Coffee.png";
import Fast from "../../assets/icons/Fast.png";
import Fish from "../../assets/icons/Fish.png";

// Food
import BeefBurger from "../../assets/food/BeefBurger.png";
import CheeseBurger from "../../assets/food/CheeseBurger.png";
import FishBurger from "../../assets/food/FishBurger.png";
import FishPizza from "../../assets/food/FishPizza.png";
import JapanRamen from "../../assets/food/JapanRamen.png";
import FriedRice from "../../assets/food/FriedRice.png";
import LabelHome from "./LabelHome";
import CategoryWidget from "./CategoryWidget";
import PopularDishes from "./PopularDishes";
import RecentOrder from "./RecentOrder";
import DiscountWidget from "./DiscountWidget";

const Home = () => {
  return (
    <div className="mt-5">
      <DiscountWidget />
      <LabelHome label="Category" />
      <div className="grid lg:grid-cols-6 gap-6 px-10 lg:px-1 mb-4">
        <CategoryWidget category="Bakery" img={Baked} />
        <CategoryWidget category="Burger" img={Burger} />
        <CategoryWidget category="Beverage" img={Chicken} />
        <CategoryWidget category="Chicken" img={Coffee} />
        <CategoryWidget category="Pizza" img={Fast} />
        <CategoryWidget category="Seafood" img={Fish} />
      </div>
      <LabelHome label="Popular Dishes" />
      <div className="grid lg:grid-cols-3 px-8 md:px-20 lg:px-1 gap-6 mb-4">
        <PopularDishes discount="15" active img={FishBurger} food="Fish Burger" price="5.59" />
        <PopularDishes discount="15" img={BeefBurger} food="Beef Burger" price="5.59" />
        <PopularDishes discount="15" img={CheeseBurger} food="Cheese Burger" price="5.59" />
      </div>
      <LabelHome label="Recent Order" />
      <div className="grid lg:grid-cols-3 px-8 md:px-20 lg:px-1 gap-6 mb-4">
        <RecentOrder img={FishPizza} food="Fish Burger" minutes="21" distance="4.97" price="5.59" />
        <RecentOrder img={JapanRamen} food="Japan Ramen" minutes="21" distance="4.97" price="5.59" />
        <RecentOrder img={FriedRice} food="Fried Rice" minutes="21" distance="4.97" price="5.59" />
      </div>
    </div>
  );
};

export default Home;

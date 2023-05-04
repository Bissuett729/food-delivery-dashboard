import React from "react";
import brunnette from "../../assets/person/brunnette.png";

const DiscountWidget = () => {
  return (
    <div className="py-2 px-10 bg-primary rounded-xl flex items-center justify-between relative overflow-hidden mb-4">
      <span className="flex flex-col gap-1 lg:gap-2 z-10">
        <p className="text-light text-xl lg:text-2xl font-bold">
          Get Discount Voucher
        </p>
        <p className="text-light text-xl lg:text-2xl font-bold mb-2">
          Up To 20%
        </p>
        <p className="text-light text-xs">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. <br /> Saepe
          esse aliquam consectetur adipisicing elit. Saepe esse aliquam.
        </p>
      </span>
      <img
        src={brunnette}
        alt="brunnette"
        className="w-30 h-24 lg:w-60 lg:h-40 z-30"
      />
      {/* Decorations */}
      <span className="bg-light/30 p-28 rounded-full absolute -top-36 right-32"></span>
      <span className="bg-primary p-20 rounded-b-full absolute -top-28 right-40"></span>
      <span className="bg-light/30 p-28 rounded-full absolute -bottom-32 -right-24"></span>
      <span className="bg-primary p-24 rounded-t-full absolute -bottom-32 -right-24"></span>
      <span className="bg-light/30 p-28 rounded-full absolute -bottom-32 -left-24"></span>
      <span className="bg-primary p-24 rounded-t-full absolute -bottom-32 -left-24"></span>
    </div>
  );
};

export default DiscountWidget;

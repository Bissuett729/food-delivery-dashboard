import React from "react";

const CategoryWidget = ({category, img}) => {
  return (
    <>
      <div className="col-span-1 bg-light rounded-xl flex items-center flex-col py-4">
        <img src={img} alt={category} />
        <p>{category}</p>
      </div>
    </>
  );
};

export default CategoryWidget;

import React, { useState } from "react";

const SubNavbar = ({ handleCategoryClick }) => {
  //BUTTON FOCUS FOR PAGE FILTERING
  const [activeButton, setActiveButton] = useState(null);

  const handleClick = (category) => {
    setActiveButton(category);
    handleCategoryClick(category);
  };
  return (
    <div className="w-full bg-gray-100">
      <div className="flex justify-center items-center h-16 w-full mx-auto px-4 text-gray-500">
        <div className="w-full flex justify-center">
          <ul className="flex gap-5">
            <button
              className={`${
                activeButton === null ? "bg-gray-300" : ""
              } p-2 rounded`}
              onClick={() => handleClick(null)}
            >
              All
            </button>
            <button
              className={`${
                activeButton === "Get Up" ? "bg-gray-300" : ""
              } p-2 rounded`}
              onClick={() => handleClick("Get Up")}
            >
              Get Up
            </button>
            <button
              className={`${
                activeButton === "OMG" ? "bg-gray-300" : ""
              } p-2 rounded`}
              onClick={() => handleClick("OMG")}
            >
              OMG
            </button>
            <button
              className={`${
                activeButton === "New Jeans" ? "bg-gray-300" : ""
              } p-2 rounded`}
              onClick={() => handleClick("New Jeans")}
            >
              New Jeans
            </button>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SubNavbar;

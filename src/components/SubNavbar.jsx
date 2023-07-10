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
      <div className="flex justify-center md:h-20 items-center w-full mx-auto text-[#71717A]">
        <div className="w-full flex justify-center">
          <ul className="flex gap-5 overflow-x-scroll no-scrollbar">
            <button
              className={`${
                activeButton === null ? "bg-gray-200 text-[#D77FA1]" : ""
              } px-4 rounded`}
              onClick={() => handleClick(null)}
            >
              All
            </button>
            <button
              className={`${
                activeButton === "Bunnies Camp" ? "bg-gray-200 text-[#D77FA1]" : ""
              } p-2 rounded`}
              onClick={() => handleClick("Bunnies Camp")}
            >
              Bunnies Camp
            </button>
            <button
              className={`${
                activeButton === "Get Up-Weverse, Bunny Beach Bag, NJ x TPG Box, POBs" ? "bg-gray-200 text-[#D77FA1]" : ""
              } p-2 rounded`}
              onClick={() => handleClick("Get Up-Weverse, Bunny Beach Bag, NJ x TPG Box, POBs")}
            >
              Get Up
            </button>
            <button
              className={`${
                activeButton === "New Jeans-Weverse and Bluebook" ? "bg-gray-200 text-[#D77FA1]" : ""
              } p-2 rounded`}
              onClick={() => handleClick("New Jeans-Weverse and Bluebook")}
            >
              New Jeans
            </button>
            
            <button
              className={`${
                activeButton === "OMG-Weverse, Message Card and POBs" ? "bg-gray-200 text-[#D77FA1]" : ""
              } p-2 rounded`}
              onClick={() => handleClick("OMG-Weverse, Message Card and POBs")}
            >
              OMG
            </button>
            <button
              className={`${
                activeButton === "Season's Greetings 2023" ? "bg-gray-200 text-[#D77FA1]" : ""
              } p-2 rounded`}
              onClick={() => handleClick("Season's Greetings 2023")}
            >
              Season's Greetings 2023
            </button>
            
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SubNavbar;

import React, { useState, useEffect } from "react";
import { useAnimate, usePresence } from "framer-motion";
import { AiOutlineCheckCircle } from "react-icons/ai";
import Merch from "../assets/merch.json";
import SubNavbar from "./SubNavbar";

const MainSection = () => {
  //FILTERING THE DATA BY CATEGORY
  const [defaultFilter, setFilter] = useState(null);

  const filterByCategory = () => {
    return Merch.filter((item) => item.category === defaultFilter);
  };

  const handleCategoryClick = (category) => {
    setFilter(category);
  };
  const renderMerch = defaultFilter ? filterByCategory() : Merch;

  //ANIMATION
  const [isPresent, safeToRemove] = usePresence();
  const [scope, animate] = useAnimate();
  useEffect(() => {
    if (isPresent) {
      const enterAnimation = async () => {
        await animate("li", { opacity: [0, 1] }, { duration: 0.5, delay: 0.2 });
      };
      enterAnimation();
    } else {
      const exitAnimation = async () => {
        await animate(
          scope.current,
          { opacity: [1, 0] },
          { duration: 0.5, delay: 0.2 }
        );
        safeToRemove();
      };
      exitAnimation();
    }
  });
  return (
    <div
      ref={scope}
      className="flex flex-col min-h-screen max-h-fit max-w-[1240px] mx-auto text-black bg-white"
    >
      <SubNavbar handleCategoryClick={handleCategoryClick} />
      <div className="flex justify-between w-full p-4">
        <h1 className="md:mx-16">
          <span className="font-semibold">{renderMerch.length} </span>items
        </h1>
        <h1 className="md:mx-16 flex items-center gap-1">
          <AiOutlineCheckCircle size={20} />
          Hide sold out
        </h1>
      </div>
      <div className="flex justify-center p-2 md:p-4">
        <ul className="grid grid-cols-2 gap-5 sm:grid-cols-4 md:grid-cols-5">
          {renderMerch.map(({ imageUrl, merchName, price, status }, index) => {
            return (
              <li
                key={index}
                className="max-w-[200px] flex flex-col gap-3 transition ease-in-out duration-300 hover:scale-105"
              >
                <a href="">
                  <img src={imageUrl} alt="" />
                </a>
                <div className="flex flex-col justify-start gap-2 p-2">
                  <h6 className="uppercase text-xs font-bold">{status}</h6>
                  <h4 className="text-sm">{merchName}</h4>
                  <h6 className="font-bold">{price}</h6>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default MainSection;

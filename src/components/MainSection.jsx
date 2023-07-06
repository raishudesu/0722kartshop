import React, { useState, useEffect } from "react";
import { useAnimate, usePresence } from "framer-motion";
import { AiOutlineCheckCircle, AiOutlineCloseCircle } from "react-icons/ai";
import Merch from "../assets/merch.json";
import SubNavbar from "./SubNavbar";
import { Link, useNavigate } from 'react-router-dom'

const MainSection = () => {
  //NAVIGATE TO PRODUCT PAGE WHEN ITEM IS SELECTED
  const navigate = useNavigate();

  const onItemClick = (item) => {
    navigate('/productpage', { state: { item } });
  };
  //HIDING SOLD OUT MERCH
  const [soldOut, setSoldOut] = useState(false);
  const hideSoldOUt = () => {
    setSoldOut(true);
  };
  const showSoldOUt = () => {
    setSoldOut(false);
  };

  const showHideSoldOutBtn = () => {
    return (
      <button
        onClick={hideSoldOUt}
        className="md:mx-16 flex items-center gap-1"
      >
        <AiOutlineCloseCircle size={20} />
        Hide sold out
      </button>
    );
  };

  const closeHideSoldOutBtn = () => {
    return (
      <button
        onClick={showSoldOUt}
        className="md:mx-16 flex items-center gap-1"
      >
        <AiOutlineCheckCircle size={20} />
        Show sold out
      </button>
    );
  };

  //FILTERING THE DATA BY CATEGORY
  const [defaultFilter, setFilter] = useState(null);

  const filterByCategory = () => {
    if (soldOut)
      return Merch.filter(
        (item) => item.category === defaultFilter && item.status !== "Sold Out"
      );
    return Merch.filter((item) => item.category === defaultFilter);
  };
  
  //SHOW ALL DATA
  const showAll = () => {
    if (soldOut) return Merch.filter((item) => item.status !== "Sold Out");
    return Merch;
  };

  const handleCategoryClick = (category) => {
    setFilter(category);
  };
  const renderMerch = defaultFilter ? filterByCategory() : showAll();

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
      className="w-full flex flex-col min-h-screen max-h-fit mx-auto text-black bg-white"
    >
      <SubNavbar handleCategoryClick={handleCategoryClick} />
      <div className="flex self-center justify-between w-full p-4 max-w-[1240px]">
        <h1 className="md:mx-16">
          <span className="font-semibold">{renderMerch.length} </span>items
        </h1>
        {!soldOut ? showHideSoldOutBtn() : closeHideSoldOutBtn()}
      </div>
      <div className="flex justify-center p-2 md:p-4">
        <ul className="grid grid-cols-2 gap-5 sm:grid-cols-4 md:grid-cols-5">
          {renderMerch.map(({ imageUrl, merchName, price, status }, index) => {
            return (
              <li
                key={index} onClick={() => onItemClick({ imageUrl, merchName, price, status })}
                className="max-w-[200px] flex flex-col gap-3 transition ease-in-out duration-300 hover:scale-105"
              >
                <a href="">
                  <img src={imageUrl} alt="" />
                </a>
                <div className="flex flex-col justify-start gap-2 p-2">
                  <h6 className="uppercase text-sm font-bold">{status}</h6>
                  <h4 className="text-sm font-normal">{merchName}</h4>
                  <h6 className="text-sm font-semibold">{price}</h6>
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

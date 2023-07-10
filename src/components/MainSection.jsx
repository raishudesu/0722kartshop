import React, { useState, useEffect } from "react";
import { useAnimate, usePresence } from "framer-motion";

import Merch from "../assets/merch.json";
import SubNavbar from "./SubNavbar";
import { useNavigate } from 'react-router-dom'
import ReadData from "./CRUD/ReadData";

const MainSection = () => {
  //NAVIGATE TO PRODUCT PAGE WHEN ITEM IS SELECTED
  

  //ANIMATION
  /* const [isPresent, safeToRemove] = usePresence();
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
  }); */
  return (
    <div
      /* ref={scope} */
      className="w-full flex flex-col min-h-screen max-h-fit mx-auto text-black bg-white"
    >
      <div className="flex justify-center flex-col items-center">
        <ReadData />
      </div>
    </div>
  );
};

export default MainSection;

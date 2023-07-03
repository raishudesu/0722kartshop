import React from "react";
import { AiOutlineCheckCircle } from "react-icons/ai";
import Merch from "../assets/merch.json";

const MainSection = () => {
  return (
    <div className="flex flex-col max-h-fit max-w-[1240px] mx-auto py-4 text-black bg-white">
      <div className="flex justify-between w-full p-4">
        <h1 className="md:mx-16">
          <span className="font-semibold">14 </span>items
        </h1>
        <h1 className="md:mx-16 flex items-center gap-1">
          <AiOutlineCheckCircle size={20} />
          Hide sold out
        </h1>
      </div>
      <div className="flex justify-center">
        <ul className="grid grid-cols-2 gap-5 sm:grid-cols-4 md:grid-cols-5">
          {Merch.map(({ imageUrl, merchName, price, status }) => {
            return (
              <li className="max-w-[200px] flex flex-col gap-3">
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

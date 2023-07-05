import React, { useState } from "react";
import { Link } from 'react-scroll';
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
const Header = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="w-full sticky top-0 z-10">
      <div className="flex justify-between md:justify-evenly items-center h-20 w-full mx-auto px-4 text-gray-500 bg-white font-semibold">
        <Link
          to="top" spy={true} smooth={true} duration={500} 
          className="text-5xl font-bubblegum text-[#D77FA1] cursor-pointer">kart.</Link>
        <div className="hidden md:flex w-[768px] justify-between items-center p-2">
          <div>
            <div className="">
              <a href="" className="">
                Cart
              </a>
            </div>
            <hr className="border-[#D77FA1]" />
          </div>
          <div>
            <div>
              <a href="">Order Shipping</a>
            </div>
            <hr className="border-[#D77FA1]" />
          </div>
          <div>
            <div>
              <a href="">Announcement</a>
            </div>
            <hr className="border-[#D77FA1]" />
            <hr />
          </div>
          <div>
            <div>
              <a href="">Events</a>
            </div>
            <hr className="border-[#D77FA1]" />
          </div>
          <div>
            <div>
              <a href="">Support</a>
            </div>
            <hr className="border-[#D77FA1]" />
          </div>
          <div className="flex flex-row justify-evenly items-center w-[25%]">
            <div>
              <div className="p-1 px-2 w-[90px] bg-[#D77FA1] rounded-full flex flex-row items-center justify-center border-2 border-[#D77FA1]">
                <a href="" className="text-white">
                  Log In
                </a>
              </div>
            </div>
            <div>
              <div className="p-1 px-2 w-[90px] rounded-full flex flex-row items-center justify-center border-2 border-[#D77FA1]">
                <a href="" className="text-[#D77FA1]">
                  Sign Up
                </a>
              </div>
            </div>
          </div>
        </div>
        <div onClick={handleNav} className="block md:hidden">
          {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
        </div>
      </div>
      <div className={
          nav
            ? "fixed left-0 top-0 h-full w-[60%] border-r bg-white ease-in-out duration-500"
            : "fixed left-[-100%]"
        }>
          <div className="flex flex-col p-2 gap-6 justify-center items-center">
          <h1 className="text-5xl font-bubblegum text-[#D77FA1] p-3 font-semibold">kart.</h1>
          <div>
            <div className="">
              <a href="" className="">
                Cart
              </a>
            </div>
          </div>
          <div>
            <div>
              <a href="">Order Shipping</a>
            </div>
          </div>
          <div>
            <div>
              <a href="">Announcement</a>
            </div>
          </div>
          <div>
            <div>
              <a href="">Events</a>
            </div>
          </div>
          <div>
            <div>
              <a href="">Support</a>
            </div>
          </div>
          <div className="flex flex-col justify-evenly items-center h-32">
            <div>
              <div className="p-1 px-2 w-[90px] bg-[#D77FA1] rounded-full flex flex-row items-center justify-center border-2 border-[#D77FA1]">
                <a href="" className="text-white">
                  Log In
                </a>
              </div>
            </div>
            <div>
              <div className="p-1 px-2 w-[90px] rounded-full flex flex-row items-center justify-center border-2 border-[#D77FA1]">
                <a href="" className="text-[#D77FA1]">
                  Sign Up
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;

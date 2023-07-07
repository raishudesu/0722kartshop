import React, { useState } from "react";
import { Link as ScrollLink } from "react-scroll";
import { Link as RouterLink } from "react-router-dom";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
const Header = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };
  const closeNav = () => {
    setNav(false)
  }

  return (
    <div className="w-full sticky top-0 z-10">
      <div className="flex justify-between md:justify-center items-center h-20 w-full mx-auto px-4 text-[#71717A] bg-white font-semibold">
        <div className="flex justify-between items-center w-[1080px]">
          <ScrollLink
            to="top"
            spy={true}
            smooth={true}
            duration={500}
            className="text-5xl font-bubblegum text-[#D77FA1] cursor-pointer"
          >
            kart.
          </ScrollLink>
          <div className="hidden md:flex justify-end p-2">
            <div className="flex justify-center gap-6">
              <div>
                <div>
                  <RouterLink to="/" className="text-[#D77FA1]">
                    Products
                  </RouterLink>
                </div>
              </div>
              <div>
                <div>
                  <a href="">Announcement</a>
                </div>
              </div>
              <div>
                <div>
                  <a href="">Support</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div onClick={handleNav} className="block md:hidden">
          {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
        </div>
      </div>
      <div
        className={
          nav
            ? "fixed left-0 top-0 h-full w-[60%] border-r bg-white ease-in-out duration-500"
            : "fixed left-[-100%]"
        }
      >
        <div className="flex flex-col p-2 gap-6 justify-center items-center">
          <h1 className="text-5xl font-bubblegum text-[#D77FA1] p-3 font-semibold">
            kart.
          </h1>
          <div>
            <div>
              <RouterLink to="/" className="text-[#D77FA1]" onClick={closeNav}>
                Home
              </RouterLink>
            </div>
          </div>
          <div>
            <div>
              <a href="">Announcement</a>
            </div>
          </div>
          <div>
            <div>
              <a href="">Support</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;

import React from "react";
import { Link as RouterLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className="w-full">
      <div className="flex justify-center items-center h-20 w-full mx-auto px-4 text-black font-semibold bg-white border-b border-gray-300">
        <nav className="no-scrollbar overflow-x-scroll lg:w-[60%] md:scrollbar-thin md:scrollbar-colored">
          <ul className="flex justify-between w-full whitespace-nowrap">
            <li className="p-4">New Jeans</li>
            <li className="p-4">OMG</li>
            <li className="p-4">Get Up</li>
            <li className="p-4">Season's Greetings 2023</li>
            <li className="p-4">Bunnies Camp</li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;

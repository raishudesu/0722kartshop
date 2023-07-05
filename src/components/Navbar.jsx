import React from "react";
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className="w-full">
      <div className="flex justify-center items-center h-20 w-full mx-auto px-4 text-black font-semibold bg-white border-b border-gray-300">
        <nav className="overflow-x-scroll lg:w-[40%] md:overflow-hidden">
          <ul className="flex justify-between w-full whitespace-nowrap">
            <Link to="/" className="text-[#D77FA1] p-4">Album</Link>
            <li className="p-4">Tour Merch</li>
            <li className="p-4">Live</li>
            <li className="p-4">Merch</li>
            <li className="p-4">Membership</li>
            <li className="p-4">Season's Greetings</li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;

import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="flex flex-col justify-center items-center max-h-fit w-full px-4 text-[#71717A] bg-gray-100 text-xs mt-6 p-6">
      <div className="flex flex-col gap-5 w-[90%] md:w-[60%] lg:w-[50%] p-2">
        <h1 className="text-center font-semibold">
          Copyright by Kart shop. All rights reserved.
        </h1>
      </div>
      <div className="flex flex-row justify-center items-center p-4 gap-2">
        <div className="">
          <Link to="/adminlogin">Admin Login</Link>
        </div>
        <div className="">
          <h1 className="font-semibold">Kart Shop Inc.</h1>
        </div>
      </div>
    </div>
  );
};

export default Footer;

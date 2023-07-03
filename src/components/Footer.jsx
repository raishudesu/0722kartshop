import React from "react";

const Footer = () => {
  return (
    <div className="flex flex-col justify-center items-center max-h-fit w-full mx-auto px-4 text-black bg-gray-100 text-xs">
      <div className="w-[100%] flex justify-center p-5 md:w-[40%] whitespace-nowrap overflow-x-scroll sm:overflow-hidden">
        <ul className="flex w-full sm:justify-center">
          <li className="font-semibold mx-2">Privacy Policy</li>
          <li className="mx-2">Terms of Use</li>
          <li className="mx-2">Terms of Use for Paid Service</li>
          <li className="mx-2">Cookie Policy</li>
        </ul>
      </div>
      <div className="flex flex-col gap-5 w-[90%] md:w-[35%]">
        <p className="text-center">
          <span className="font-semibold">COMPANY: </span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
          temporibus corporis, iste maiores mollitia pariatur voluptatibus earum
          odit nesciunt cupiditate rem, error officiis est voluptate, nisi sit
          quae consequatur quia.
        </p>
        <p className="text-center">
        <span className="font-semibold">ADDRESS: </span> Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
          temporibus corporis, iste maiores mollitia pariatur voluptatibus earum
          odit nesciunt cupiditate rem, error officiis est voluptate, nisi sit
          quae consequatur quia.
        </p>
        <p className="text-center">
        <span className="font-semibold">PERSONAL INFORMATION OFFICER: </span> Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
          temporibus corporis, iste maiores mollitia pariatur voluptatibus earum
          odit nesciunt cupiditate rem, error officiis est voluptate, nisi sit
          quae consequatur quia.
        </p>
        <h1 className="text-center font-semibold">Copyright by Kart shop. All rights reserved.</h1>
      </div>
      <div className="m-4">
        <h1 className="font-semibold">Kart Shop Inc.</h1>
      </div>
    </div>
  );
};

export default Footer;

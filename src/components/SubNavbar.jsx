import React from "react";

const SubNavbar = () => {
  return (
    <div className="w-full">
      <div className="flex justify-center items-center h-16 w-full mx-auto px-4 text-gray-500 bg-gray-100">
        <div className="w-full flex justify-center">
          <ul className="flex gap-5">
            <a href="" className="bg-gray-300 p-2 rounded">
              All
            </a>
            <a href="" className="p-2 rounded">
              Get Up
            </a>
            <a href="" className="p-2 rounded">
              OMG
            </a>
            <a href="" className="p-2 rounded">
              New Jeans
            </a>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SubNavbar;

import React from "react";
import ReadData from "./CRUD/ReadData";

const MainSection = () => {
  return (
    <div className="w-full flex flex-col min-h-screen max-h-fit mx-auto text-black bg-white">
      <div className="flex justify-center flex-col items-center">
        <ReadData />
      </div>
    </div>
  );
};

export default MainSection;

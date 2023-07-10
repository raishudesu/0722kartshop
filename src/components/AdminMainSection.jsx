import React from "react";
import ReadData from "./CRUD/ReadData";
import AddData from "./CRUD/AddData";

const AdminMainSection = () => { 

  return (
    <div className="flex flex-col">
      <AddData />
      <div className="flex flex-col justify-center md:p-4 items-center">
          <h1 className="text-2xl font-semibold">Kart Products</h1>
          <ReadData />
      </div>
    </div>
  );
};

export default AdminMainSection;

import React from "react";
import { useLocation } from "react-router-dom";
import GetImage from "./CRUD/GetImage";

function ProductPage() {
  const location = useLocation();
  const { item } = location.state || {};

  if (!item) {
    return <div>No item data found.</div>;
  }

  const { imageRef, merchName, price, status } = item;

  return (
    <div className="w-full max-h-fit md:h-screen md:p-6">
      <div className="w-full flex flex-col md:flex-row justify-center md:gap-10">
        <div className="w-full h-[500px] md:w-[20%] overflow-hidden">
          <GetImage filename={imageRef} />
        </div>
        <div className="p-2 flex flex-col justify-center items-center w-full md:w-[20%] md:p-0 max-h-fit">
          <div className="flex flex-col gap-3 w-full">
            <h1 className="text-md md:text-4xl font-black uppercase">
              {status}
            </h1>
            <h4 className="text-md md:text-3xl">{merchName}</h4>
            <h6 className="font-bold md:text-2xl">{price}</h6>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductPage;

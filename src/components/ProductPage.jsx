import React, { useState } from "react";
import { AiOutlineShoppingCart, AiOutlineMinusCircle, AiOutlinePlusCircle, AiOutlineExclamationCircle } from "react-icons/ai";
import { useLocation } from "react-router-dom";

function ProductPage() {
  const location = useLocation();
  const { item } = location.state || {};

  if (!item) {
    return <div>No item data found.</div>;
  }

  const { imageUrl, merchName, price, status } = item;

  const [itemCount, setCount] = useState(1)
  const addItem = () => {
    setCount(itemCount+1)
  }
  const removeItem = () => {
    setCount(itemCount-1)
  }
  //CONVERTING THE PRICE INTO NUMBER/FLOAT
  const priceString = price;
  const priceWithoutSymbol = priceString.replace(/\$/g, ''); // Remove the dollar sign
  const priceFloat = parseFloat(priceWithoutSymbol);;
  return (
    <div className="w-full max-h-fit md:h-screen md:p-6">
      <div className="w-full flex flex-col md:flex-row justify-center md:gap-10">
        <img src={imageUrl} alt="/" className="w-full md:w-[40%] lg:w-[30%]" />
        <div className="flex flex-col justify-center items-center w-full md:w-[30%] max-h-fit">
          <div className="p-2 flex flex-col gap-3 w-full">
            <h1 className="text-md md:text-2xl font-black">{status}</h1>
            <h4 className="text-md md:text-2xl">{merchName}</h4>
            <h6 className="font-semibold md:text-2xl">{price}</h6>
          </div>
          <div className="w-full p-2 flex flex-col gap-4">
            <h6>Set</h6>
            <div className="flex justify-between">
                <div className="flex gap-2 items-center justify-center">
                    <button onClick={removeItem} disabled={itemCount === 1}><AiOutlineMinusCircle size={25}/></button>
                    <h6 className="text-xl">{itemCount}</h6>
                    <button onClick={addItem} disabled={itemCount === 4}><AiOutlinePlusCircle size={25} /></button>
                </div>
                <h6 className="font-semibold">${(priceFloat * itemCount).toFixed(2)}</h6>
            </div>
            <div className="flex gap-2 bg-gray-100 p-2 items-center">
                <AiOutlineExclamationCircle size={20}/>
                <h6>You can order up to 4 items.</h6>
            </div>
            <div className="flex justify-between">
                <h6>Total {itemCount} item/s</h6>
                <h6 className="font-semibold">${(priceFloat * itemCount).toFixed(2)}</h6>
            </div>
          </div>
          <div className="p-4 w-full flex justify-center items-center gap-4">
            <button disabled={status === 'Sold Out'} className="uppercase bg-[#D77FA1] p-3 w-full text-white font-semibold rounded-lg ">
              Buy now
            </button>
            <button>
              <AiOutlineShoppingCart size={30} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductPage;

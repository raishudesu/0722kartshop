import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { serverTimestamp, doc, updateDoc } from "firebase/firestore";
import { db } from "../../firebase";
import DeleteData from "./DeleteData";
import { notifyUpdate } from "../AdminHeader";
import { ref, uploadBytes } from "firebase/storage";
import { storage } from "../../firebase";
import GetImage from "./GetImage";
import { v4 } from "uuid";
import DeleteFile from "./DeleteFile";

const EditData = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { item } = location.state || {};

  if (!item) {
    return <div>No item data found.</div>;
  }

  const { imageRef, merchName, price, status, id, category } = item;

  const [updateImageUpload, setUpdateImageUpload] = useState(null);
  const [updatedCategory, setUpdatedCategory] = useState(category);
  const [updatedMerchName, setUpdatedMerchName] = useState(merchName);
  const [updatedStatus, setUpdatedStatus] = useState(status);
  const [updatedPrice, setUpdatedPrice] = useState(price);

  const updateImage = async () => {
    if (updateImageUpload === null) return null;

    const imageRefUrl = `images/${updateImageUpload.name + v4()}`;
    const imageRef = ref(storage, imageRefUrl);

    try {
      await uploadBytes(imageRef, updateImageUpload);
      return imageRefUrl;
    } catch (error) {
      console.log(error);
      return null;
    }
  };
  const updateProduct = async (id) => {
    const productDoc = doc(db, "kart", id);
    const imageRefUrl = await updateImage();
    try {
      await updateDoc(productDoc, {
        category: updatedCategory,
        price: updatedPrice,
        merchName: updatedMerchName,
        status: updatedStatus,
        modifiedAt: serverTimestamp(),
        ...(imageRefUrl && { imageRef: imageRefUrl }),
      });
      notifyUpdate();
      if (updateImageUpload !== null) DeleteFile(imageRef);
      navigate("/adminmainsection");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="w-full max-h-fit md:p-6 flex flex-col justify-center items-center">
      <div className="w-full flex flex-col md:flex-row justify-center items-center md:gap-10">
        <div className="max-w-[200px]">
          <GetImage filename={imageRef} />
        </div>
        <div className="p-2 flex flex-col justify-center items-center w-full md:w-[20%] md:p-0 max-h-fit">
          <div className="flex flex-col gap-3 w-full">
            <h1 className="text-md md:text-2xl font-semibold uppercase">
              Status: {status}
            </h1>
            <h4 className="text-md md:text-2xl">Category: {category}</h4>
            <h4 className="text-md md:text-2xl">Product Name: {merchName}</h4>
            <h6 className="font-bold md:text- xl">Price: {price}</h6>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center gap-4 w-full md:w-[30%] p-4">
        <h1 className="text-2xl font-semibold">Update Product</h1>
        <input
          type="file"
          onChange={(e) => {
            setUpdateImageUpload(e.target.files[0]);
          }}
        />
        <input
          type="text"
          value={updatedMerchName}
          className="w-full p-1 border-2 rounded-md"
          onChange={(e) => setUpdatedMerchName(e.target.value)}
        />
        <input
          type="text"
          value={updatedPrice}
          className="w-full p-1 border-2 rounded-md"
          onChange={(e) => setUpdatedPrice(e.target.value)}
        />
        <select
          name=""
          id=""
          className="w-full p-1 border-2 rounded-md"
          onChange={(e) => setUpdatedStatus(e.target.value)}
        >
          <option value={updatedStatus}>Update status...</option>
          <option value="pre-order">Pre-order</option>
          <option value="available">Available</option>
          <option value="sold-out">Sold-out</option>
        </select>
        <select
          name=""
          id=""
          className="w-full p-1 border-2 rounded-md"
          onChange={(e) => setUpdatedCategory(e.target.value)}
        >
          <option value="">Select category...</option>
          <option value="New Jeans-Weverse and Bluebook">
            New Jeans-Weverse and Bluebook
          </option>
          <option value="Season's Greetings 2023">
            Season's Greetings 2023
          </option>
          <option value="OMG-Weverse, Message Card and POBs">
            OMG-Weverse, Message Card and POBs
          </option>
          <option value="Get Up-Weverse, Bunny Beach Bag, NJ x TPG Box, POBs">
            Get Up-Weverse, Bunny Beach Bag, NJ x TPG Box, POBs
          </option>
          <option value="Bunnies Camp">Bunnies Camp</option>
          <option value="Miscellanous">Miscellanous</option>
        </select>
        <button
          onClick={() => updateProduct(id)}
          className="w-full py-2 rounded-md bg-[#D77FA1] text-white"
        >
          Save
        </button>
        <DeleteData id={id} filename={imageRef} />
      </div>
    </div>
  );
};

export default EditData;

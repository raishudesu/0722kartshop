import React, { useState, useEffect, useRef } from "react";
import { db } from "../../firebase";
import {
  collection,
  doc,
  setDoc,
  getDocs,
  addDoc,
  deleteDoc,
  updateDoc,
  serverTimestamp,
} from "firebase/firestore";
import { UserAuth } from "../../context/AuthContext";
import { notifyUpload } from "../AdminHeader";
import { storage } from "../../firebase";
import { ref, uploadBytes } from "firebase/storage";
import { v4 } from "uuid";

const AddData = (imageRef) => {
  const { user } = UserAuth();
  //ADD NEW PRODUCTS
  const [newMerchName, setNewMerchName] = useState("");
  const [newStatus, setNewStatus] = useState("");
  const [newCategory, setNewCategory] = useState("");
  const [newMember, setNewMember] = useState("");
  const [newPrice, setNewPrice] = useState("");
  const [imageUpload, setImageUpload] = useState(null);

  const kartCollectionRef = collection(db, "kart");

  const uploadImage = async () => {
    if (imageUpload === null) return null;

    const imageRefUrl = `images/${imageUpload.name + v4()}`;
    const imageRef = ref(storage, imageRefUrl);

    try {
      await uploadBytes(imageRef, imageUpload);
      return imageRefUrl;
    } catch (error) {
      console.log(error);
      return null;
    }
  };

  const onSubmitProduct = async (e) => {
    e.preventDefault();
    try {
      const imageRefUrl = await uploadImage();

      if (imageRefUrl !== null) {
        await addDoc(kartCollectionRef, {
          merchName: newMerchName,
          category: newCategory,
          membership: newMember,
          price: newPrice,
          status: newStatus,
          addedBy: user?.uid,
          addedAt: serverTimestamp(),
          imageRef: imageRefUrl,
        });

        notifyUpload();
        formRef.current.reset();
      }
    } catch (error) {
      console.log(error);
    }
  };
  const formRef = useRef(null);

  return (
    <div className="flex flex-col justify-center items-center w-full gap-2">
      <h1 className="text-2xl font-semibold">Add Product to Database</h1>
      <form
        ref={formRef}
        onSubmit={onSubmitProduct}
        className="flex flex-col justify-center items-center gap-4 p-2"
      >
        <input
          type="file"
          onChange={(e) => {
            setImageUpload(e.target.files[0]);
          }}
        />
        <select
          name=""
          id=""
          className="w-full p-1 border-2 rounded-md"
          onChange={(e) => setNewStatus(e.target.value)}
        >
          <option value="">Select status...</option>
          <option value="pre-order">Pre-order</option>
          <option value="sold-out">Sold-out</option>
        </select>
        <select
          name=""
          id=""
          className="w-full p-1 border-2 rounded-md"
          onChange={(e) => setNewMember(e.target.value)}
        >
          <option value="">Select member...</option>
          <option value="Minji">Minji</option>
          <option value="Hanni">Hanni</option>
          <option value="Danielle">Danielle</option>
          <option value="Haerin">Haerin</option>
          <option value="Hyein">Hyein</option>
        </select>
        <input
          type="text"
          placeholder="Product Name"
          required
          onChange={(e) => setNewMerchName(e.target.value)}
          className="w-full p-1 border-2 border-gray-200 outline-[#D77FA1] rounded-md"
        />
        <select
          name=""
          id=""
          className="w-full p-1 border-2 rounded-md"
          onChange={(e) => setNewCategory(e.target.value)}
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
        <input
          type="text"
          placeholder="Price"
          required
          onChange={(e) => setNewPrice(e.target.value)}
          className="w-full p-1 border-2 border-gray-200 outline-[#D77FA1] rounded-md"
        />

        <button
          type="submit"
          className="w-full py-2 rounded-md bg-[#D77FA1] text-white"
        >
          Upload
        </button>
      </form>
    </div>
  );
};

export default AddData;

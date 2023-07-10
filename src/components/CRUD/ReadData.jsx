import React, { useState, useEffect } from "react";
import { db } from "../../firebase";
import { collection, onSnapshot, query, orderBy } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import { UserAuth } from "../../context/AuthContext";
import { AiOutlineCheckCircle, AiOutlineCloseCircle } from "react-icons/ai";
import GetImage from "./GetImage";
import Navbar from "../Navbar";
import SubNavbar from "../SubNavbar";

const ReadData = () => {
  const { user } = UserAuth();
  const navigate = useNavigate();
  const [dataList, setDataList] = useState([]);

  useEffect(() => {
    const kartCollectionRef = collection(db, "kart");
    const q = query(kartCollectionRef, orderBy("addedAt"));
  
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const filteredData = snapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setDataList(filteredData);
    });
  
    return () => {
      unsubscribe();
    };
  }, []);

  //HIDING SOLD OUT MERCH
  const [soldOut, setSoldOut] = useState(false);
  const hideSoldOUt = () => {
    setSoldOut(true);
  };
  const showSoldOUt = () => {
    setSoldOut(false);
  };

  const showHideSoldOutBtn = () => {
    return (
      <button
        onClick={hideSoldOUt}
        className="md:mx-16 flex items-center gap-1"
      >
        <AiOutlineCloseCircle size={20} />
        Hide sold out
      </button>
    );
  };

  const closeHideSoldOutBtn = () => {
    return (
      <button
        onClick={showSoldOUt}
        className="md:mx-16 flex items-center gap-1"
      >
        <AiOutlineCheckCircle size={20} />
        Show sold out
      </button>
    );
  };

  //FILTERING THE DATA BY CATEGORY
  const [defaultFilter, setFilter] = useState(null);

  const filterByCategory = () => {
    if (soldOut)
      return dataList.filter(
        (item) => item.category === defaultFilter && item.status !== "sold-out"
      );
    return dataList.filter((item) => item.category === defaultFilter);
  };


  //SHOW ALL DATA
  const showAll = () => {
    if (soldOut) return dataList.filter((item) => item.status !== "sold-out");
    return dataList;
  };

  const handleCategoryClick = (category) => {
    setFilter(category);
  };
  const renderMerch = defaultFilter ? filterByCategory() : showAll();

  const onItemClick = (item) => {
    if (user) {
      navigate("/editproduct", { state: { item } });
    } else {
      navigate("/productpage", { state: { item } });
    }
  };

  return (
    <div className="w-full max-h-fit flex flex-col justify-center items-center">
      <Navbar />
      <SubNavbar handleCategoryClick={handleCategoryClick} />
      <div className="flex self-center justify-between w-full p-4 max-w-[1240px]">
        <h1 className="md:mx-16">
          <span className="font-semibold">{renderMerch.length} </span>items
        </h1>
        {!soldOut ? showHideSoldOutBtn() : closeHideSoldOutBtn()}
      </div>
      <div className="w-full md:w-[1080px]">
        <ul className="grid grid-cols-2 gap-5 sm:grid-cols-4 md:grid-cols-5">
          {renderMerch.map(
            ({ imageRef, merchName, price, status, id, category }, index) => {
              return (
                <li
                  key={id} // Use a unique identifier as the key
                  onClick={() =>
                    onItemClick({
                      imageRef,
                      merchName,
                      price,
                      status,
                      id,
                      category,
                    })
                  }
                  className="max-w-[200px] flex flex-col gap-3 transition ease-in-out duration-300 hover:scale-105 overflow-hidden"
                >
                  <div className="w-[170px] h-[225px] md:w-full overflow-hidden">
                    <GetImage filename={imageRef} />
                  </div>
                  <div className="flex flex-col justify-start gap-2 p-2 md:p-1">
                    <h6 className="uppercase text-sm font-bold">{status}</h6>
                    <h4 className="text-sm font-semibold text-[#71717A]">
                      {category}
                    </h4>
                    <h4 className="text-sm font-normal text-[#71717A]">
                      {merchName}
                    </h4>
                    <h6 className="text-sm font-semibold">{price}</h6>
                  </div>
                </li>
              );
            }
          )}
        </ul>
      </div>
    </div>
  );
};

export default ReadData;

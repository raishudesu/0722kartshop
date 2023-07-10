import React from "react";
import { db } from "../../firebase";
import { doc, deleteDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import { notifyDeleted } from "../AdminHeader";
import DeleteFile from "./DeleteFile";

const DeleteData = (props) => {
  const navigate = useNavigate();
  //DELETE PRODUCT FROM THE DATABASE

  const deleteProduct = async (id, filename) => {
    const productDoc = doc(db, "kart", id);
    try {
      await deleteDoc(productDoc);
      DeleteFile(filename);
      notifyDeleted();
      navigate("/adminmainsection");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="w-full py-2 rounded-md bg-red-400 text-white flex justify-center">
      <button
        onClick={() => {
          deleteProduct(props.id, props.filename);
        }}
      >
        Delete
      </button>
    </div>
  );
};

export default DeleteData;

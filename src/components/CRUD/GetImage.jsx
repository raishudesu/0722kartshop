import React, { useState, useEffect } from "react";
import { getDownloadURL, ref, listAll } from "firebase/storage";
import { storage } from "../../firebase";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const GetImage = (props) => {
  const [imageUrl, setImageUrl] = useState(null);

  useEffect(() => {
    const getImageUrlByFilename = async () => {
      try {
        const imageRef = ref(storage, props.filename);
        const timeout = 2000; // Timeout duration in milliseconds

        // Wrap the function call with a setTimeout
        setTimeout(async () => {
          try {
            const url = await getDownloadURL(imageRef);
            setImageUrl(url);
          } catch (error) {
            console.log(error);
            setImageUrl(null);
          }
        }, timeout);
      } catch (error) {
        console.log(error);
        setImageUrl(null);
      }
    };

    getImageUrlByFilename();
  }, []); // Pass an empty dependency array

  return imageUrl ? (
    <img src={imageUrl} alt="" className="w-full" />
  ) : (
    <Skeleton className="h-[100%]" />
  );
};

export default GetImage;

import React, {useState, useEffect} from 'react'
import { getDownloadURL, ref, listAll } from "firebase/storage";
import { storage } from "../../firebase";

const GetImage = (props) => {
    const [imageUrl, setImageUrl] = useState(null);

    useEffect(() => {
        const getImageUrlByFilename = async () => {
        try {
            const imageRef = ref(storage, props.filename);
            const url = await getDownloadURL(imageRef);
            setImageUrl(url);
        } catch (error) {
            console.log(error);
            setImageUrl(null);
        }
        };

        getImageUrlByFilename();
    }, []); // Pass an empty dependency array

  return imageUrl ? <img src={imageUrl} alt="" className="w-full" /> : null;
}

export default GetImage

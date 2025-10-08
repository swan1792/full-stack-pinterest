import React from "react";
import GalleryItems from "../galleryItems/GalleryItems.jsx";
import { items } from "../../assets/assets.js";
import "./gallery.css";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const fetchPins = async () => {
  const res = await axios.get(`${import.meta.env.VITE_API_ENDPOINT}/pins`);
  return res.data;
};

const Gallery = () => {

  const {isPending, error, data } = useQuery({
    queryKey: ["pins"],
    queryFn: fetchPins
  })

  if(error) return "An error has occurred: " + error.message;
  if(isPending) return "Loading...";

  console.log(data);


  return (
    <div className="gallery">
      {data.map((item) => (
        <GalleryItems item={item} key={item._id} />
      ))}
    </div>
  );
};

export default Gallery;

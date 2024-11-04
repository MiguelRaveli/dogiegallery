import React, { useEffect, useState } from "react";
import { fetchImageDog } from "../api/dogApi";
import { Link } from "react-router-dom";

const CardAbout = ({ dog }) => {
  const [imageDog, setImageDog] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetchImageDog(dog, setImageDog, setLoading);
  }, []);
  return (
    <>
      <img
        className="w-[60vw] rounded-lg shadow-lg md:w-[30vw] 2xl:w-[20vw]"
        src={imageDog.url}
        alt="dog"
      />
    </>
  );
};

export default CardAbout;

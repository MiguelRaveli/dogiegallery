import React, { useEffect, useState } from "react";
import { fetchImageDog } from "../api/dogApi";
import { Link } from "react-router-dom";

const Card = ({ dog }) => {
  const [imageDog, setImageDog] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetchImageDog(dog, setImageDog, setLoading);
  }, []);
  return (
    <>
      <Link
        to={`/gallery/dogie-info/${dog.id}`}
        className="bg-red-500 m-2 ml-1 mr-1 h-60 w-36 p-2 flex flex-col
        justify-around rounded-md shadow shadow-black hover:scale-105 duration-100 cursor-pointer xl:h-72 xl:w-52 2xl:h-96 2xl:w-60"
      >
        <img
          className="w-full h-1/2 bg-contain rounded-md shadow-md shadow-sm shadow-black"
          src={imageDog.url}
          alt="dog"
        />
        <h1 className="text-center text-white font-medium p-1 underline">
          {dog.name}
        </h1>
      </Link>
    </>
  );
};

export default Card;

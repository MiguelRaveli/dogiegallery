import React, { useEffect, useState } from "react";
import womanSitting from "../imgs/womanSitting.svg";
import { Link } from "react-router-dom";
import { fetchFindDogById, fetchImageDog } from "../api/dogApi";
import Spinner from "./Spinner";
import BarLoader from "react-spinners/BarLoader";

const ShowGallerySample = () => {
  const [dog, setDog] = useState([]);
  const [imageDog, setImageDog] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    // Primeira chamada para buscar o dog por ID
    fetchFindDogById(setDog, setLoading, 10);
  }, []);

  useEffect(() => {
    // Só chama fetchImageDog quando dog tem um valor válido
    if (dog) {
      fetchImageDog(dog, setImageDog, setLoading);
    }
  }, [dog]);
  return (
    <>
      {loading ? (
        <BarLoader loading={loading} />
      ) : (
        <>
          <div className="rounded visible relative bg-red-500 text-white flex items-center justify-center w-screen p-5 col-span-2 text-left md:w-full md:text-xs">
            <img
              className="h-3/4 w-1/4 bg-contain rounded-lg md:w-1/3 lg:w-1/5 xl:w-1/5"
              src={imageDog.url}
              alt="dog"
            />
            <div className="w-3/4  ml-5">
              <h1 className="my-2 text-sm 2xl:text-2xl">Amostra da Galeria</h1>
              <p className="my-3 xl:text-sm text-sm 2xl:text-sm">
                {" "}
                Nome: {dog.name}
              </p>
              <p className="my-3 xl:text-sm text-sm  2xl:text-sm">
                Temperamento: {dog.temperament}
              </p>
              <p></p>

              <Link
                className="underline text-sm xl:text-sm  2xl:text-sm"
                to={"/gallery"}
              >
                Ver mais...
              </Link>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default ShowGallerySample;

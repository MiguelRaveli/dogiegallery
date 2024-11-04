import React, { useEffect, useState } from "react";
import { fetchFindDogById, fetchImageDog } from "../api/dogApi";
import { Link, useParams } from "react-router-dom";
import Spinner from "../components/Spinner";
import { FaArrowAltCircleLeft } from "react-icons/fa";

const DogieInfoPage = ({ dog }) => {
  const { id } = useParams();
  const [dogById, setDogById] = useState([]);
  const [imageDog, setImageDog] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetchFindDogById(setDogById, setLoading, id);
  }, []);

  useEffect(() => {
    if (dogById.length !== 0) {
      fetchImageDog(dogById, setImageDog, setLoading);
    }
  }, [loading]);
  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        <>
          <section className="bg-white dark:bg-red-900">
            <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl ">
              <div className="flex justify-start w-full">
                <Link to={"/gallery"}>
                  <FaArrowAltCircleLeft className="p-2 text-5xl text-white" />
                </Link>
              </div>
              <div className="font-light flex flex-col items-center sm:grid grid-cols-2 lg:flex">
                <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white text-center">
                  {dogById.name}
                </h2>
                <img
                  className="w-[45vw] rounded-lg m-5 border-solid border-2 border-black lg:w-[25vw]"
                  src={`${imageDog.url}`}
                  alt="office content 1"
                />
                <p className="mt-3 p-1 text-white text-justify sm:col-span-2 sm:pl-20 sm:pr-20 lg:text-lg lg:pr-52 lg:pl-52 xl:text-xl">
                  Welcome to the world of the <b>{dogById.name}</b>. Originating
                  in the {dogById.country_code}, this {dogById.breed_group}{" "}
                  breed was once a beloved {dogById.bred_for}. Known for being{" "}
                  <b>{dogById.temperament}</b>. With a life span of{" "}
                  <b>{dogById.life_span}</b>, the {dogById.name} Dog is a loyal
                  companion with an ideal size for families, standing{" "}
                  <b>{dogById.height.imperial}</b> inches tall and weighing
                  between <b>{dogById.weight.imperial}</b>. This breed combines
                  warmth and loyalty with a keen watchful nature, making it a
                  wonderful family pet and companion.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4 mt-8"></div>
            </div>
          </section>
        </>
      )}
    </>
  );
};

export default DogieInfoPage;

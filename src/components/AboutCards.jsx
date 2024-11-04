import { useContext, useEffect, useState } from "react";
import Spinner from "./Spinner";
import { fetchDogs } from "../api/dogApi";
import { Context } from "../App";
import CardAbout from "./CardAbout";

const AboutCards = () => {
  const [dogs, setDogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [pageNumber, setPageNumber] = useContext(Context);

  useEffect(() => {
    fetchDogs(setDogs, setLoading, pageNumber);
  }, [pageNumber]);
  return (
    <>
      {loading ? (
        <Spinner loading={loading} />
      ) : (
        <>
          <div className="w-full flex items-center justify-center">
            <div className="mt-16 gap-8 grid grid-cols-1 md:flex md:flex-wrap md:justify-center md:w-[75vw] 2xl:w-[20vw] 2xl:w-full">
              {dogs.slice(0, 3).map((dog) => (
                <CardAbout key={dog.id} dog={dog} />
              ))}
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default AboutCards;

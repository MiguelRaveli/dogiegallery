import { useContext, useEffect, useState } from "react";
import Card from "./Card";
import Spinner from "./Spinner";
import { fetchDogs } from "../api/dogApi";
import { Context } from "../App";



const HomeCards = () => {
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
          <div className="w-full flex items-center justify-center bg-gradient-to-b from-white to-gray-200">
            <div className="grid grid-cols-2 p-2 justify-items-center sm:grid-cols-4 md:w-[80%] lg:w-[60%] xl:w-[70%] 2xl:w-[70%]">
              {dogs.map((dog) => (
                <Card key={dog.id} dog={dog} />
              ))}
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default HomeCards;

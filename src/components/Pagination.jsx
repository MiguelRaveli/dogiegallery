import React, { useContext, useEffect, useState } from "react";
import {
  IoIosArrowDropleftCircle,
  IoIosArrowDroprightCircle,
} from "react-icons/io";

import { Context } from "../App";
import { fetchDogs } from "../api/dogApi";

const Pagination = () => {
  const [pageNumber, setPageNumber] = useContext(Context);
  const [dogs, setDogs] = useState([]);
  const [loading, setLoading] = useState([]);
  useEffect(() => {
    fetchDogs(setDogs, setLoading, pageNumber);
  }, []);
  return (
    <>
      <div className=" bg-gray-200 p-10 flex justify-center items-center gap-5 text-gray-900 text-4xl">
        <IoIosArrowDropleftCircle
          className="hover:cursor-pointer hover:scale-110 duration-300"
          onClick={() => {
            if (pageNumber === 1) {
              return;
            }
            setPageNumber(pageNumber - 1);
          }}
        />
        <div className="underline">{pageNumber}</div>
        <IoIosArrowDroprightCircle
          className="hover:cursor-pointer hover:scale-110 duration-300"
          onClick={() => {
            if (pageNumber === dogs.length) {
              return;
            }
            setPageNumber(pageNumber + 1);
          }}
        />
      </div>
    </>
  );
};

export default Pagination;

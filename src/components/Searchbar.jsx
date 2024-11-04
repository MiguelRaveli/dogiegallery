import React, { useEffect, useState } from "react";
import { fetchSearchDogs } from "../api/dogApi";
import { useNavigate } from "react-router-dom";

const Searchbar = () => {
  const [dogs, setDogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedDog, setSelectedDog] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    fetchSearchDogs(setDogs, setLoading);
  }, []);

  const handleSelectChange = (e) => {
    setSelectedDog(e.target.value);
  };

  const handleSearchDog = (e) => {
    e.preventDefault();
    const getDogIdByName = dogs.find((dog) => dog.name === `${selectedDog}`);
    navigate(`dogie-info/${getDogIdByName.id}`);
  };
  return (
    <form className="flex items-center max-w-sm mx-auto mb-5 w-[80vw]">
      <label htmlFor="underline_select" className="sr-only">
        Underline select
      </label>
      <div className="relative w-full">
        <select
          onChange={handleSelectChange}
          id="underline_select"
          className="block py-2.5 px-3 w-full text-sm text-gray-500 bg-white border border-red-500 
      rounded-lg appearance-none dark:bg-white dark:border-red-400 dark:text-black 
      focus:ring-red-500 focus:border-red-500"
        >
          <option defaultValue={"Choose a country"}>Ver raças:</option>
          {dogs.map((dog) => {
            return (
              <option key={dog.id} value={`${dog.name}`}>
                {dog.name}
              </option>
            );
          })}
        </select>
      </div>
      <button
        onClick={handleSearchDog}
        className="p-2.5 ms-2 text-sm font-medium text-white bg-red-400 rounded-lg border border-red-400 
    hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-red-300 dark:bg-red-400 
    dark:hover:bg-red-700 dark:focus:ring-red-800"
      >
        <svg
          className="w-4 h-4"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 20 20"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
          />
        </svg>
      </button>
    </form>
  );
};

export default Searchbar;

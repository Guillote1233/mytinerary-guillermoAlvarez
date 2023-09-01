import React, { useState, useEffect } from "react";
import Card from "./card";
import { useDispatch, useSelector } from "react-redux";
import { getCities } from "../redux/actions/citiesActions.js";

function Cities() {
  const [searchTerm, setsearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const dispatch = useDispatch();
  const cities = useSelector(
    (store) => store.citiesReducer.cities
  );

  useEffect(()=>{
    dispatch(getCities(searchTerm))
  },[searchTerm])

  const filteredCities = cities.slice(startIndex, endIndex);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  return (
    <div className="flex flex-col items-center bg-[url(/bgcities.jpeg)] bg-no-repeat bg-cover justify-around min-h-[82.5vh]">
      <div className="font-semibold md:text-4xl text-2xl p-5">
        <h1 className="text-black">Find the best cities to travel!</h1>
      </div>
      <div className="p-4 w-full h-20 flex items-center justify-center">
        <input
          type="text"
          placeholder="Search cities..."
          className="border-black rounded px-4 py-2 w-64 md:w-96"
          value={searchTerm}
          onChange={(e) => setsearchTerm(e.target.value)}
        />
      </div>
      <div className="flex content-center flex-wrap gap-4 max-w-screen-xl min-h-[60vh] p-4 justify-center">
        {filteredCities.length === 0 ? (
          <div className="w-full text-center">
            <img
              src="/nosearchresults.png"
              alt="No search results"
              className="w-80 h-80 p-5"
            />
            <p className="text-white p-4 font-semibold text-2xl">
              No search results!
            </p>
          </div>
        ) : (
          filteredCities.map((city) => <Card key={city._id} data={city} />)
        )}
      </div>
      <div className="flex items-center justify-center pb-4">
        {currentPage > 1 && (
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            className="px-3 py-1 rounded bg-blue-500 text-white mr-2"
          >
            Previous
          </button>
        )}

        {filteredCities.length >= itemsPerPage && (
          <button
            onClick={() => handlePageChange(currentPage + 1)}
            className="px-3 py-1 rounded bg-blue-500 text-white ml-2"
          >
            Next
          </button>
        )}
      </div>
    </div>
  );
}

export default Cities;
import React, { useState } from "react";
import Card from "./card";
import dataCities from "../assets/datacities";

function Cities() {
  const [searchTerm, setsearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const filteredCities = dataCities
    .filter((city) =>
      city.name.toLowerCase().startsWith(searchTerm.toLowerCase())
    )
    .slice(startIndex, endIndex);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  return (
    <div className="flex flex-col items-center bg-[url(/bgcities.jpeg)] bg-no-repeat bg-cover min-h-[90.7vh] justify-around">
      <div className="font-semibold md:text-4xl text-2xl pt-20 pb-6">
        <h1 className="text-white">Find the best cities to travel!</h1>
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
          filteredCities.map((city) => <Card key={city.id} data={city} />)
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

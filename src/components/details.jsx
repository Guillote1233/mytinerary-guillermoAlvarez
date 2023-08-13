import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import dataCities from "../assets/datacities";
import { ArrowLeftIcon } from "@heroicons/react/24/solid"

function Details() {
  const { id } = useParams();
  const [cities, setCities] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    const selectedCity = dataCities.find((city) => city.id === parseInt(id));
    setCities(selectedCity);
  }, [id]);

  if (!cities) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex flex-col items-center bg-[url('/bgdetails.jpg')] bg-no-repeat bg-cover min-h-[90.7vh] justify-around">
      <div className="bg-blue-400 border-[2px] rounded-md min-w-[80vw] md:min-w-[40vw]">
        <div className="flex flex-col md:flex-row p-4">
          <div className="pr-5 max-md:pb-3">
            <button className="bg-indigo-600 rounded-md p-2 text-white" onClick={()=> navigate(-1)}><ArrowLeftIcon className="w-4 h-4"/></button>
          </div>
          <div className="w-full md:w-1/2 h-[300px] md:h-[400px] object-cover">
            <img
              src={cities.url}
              alt={cities.name}
              className="rounded-lg border-2 w-full h-full"
            />
          </div>
          <div className="flex flex-col md:ml-4 max-w-md">
            <h2 className="text-white font-bold text-3xl md:text-5xl">
              {cities.name}
            </h2>
            <h3 className="text-white font-semibold text-xl md:text-2xl">
              {cities.country}
            </h3>
          </div>
        </div>
        <div className="flex justify-center p-4">
          <img src="/underconstruction.png" alt="coming soon" />
        </div>
      </div>
    </div>
  );
}

export default Details;

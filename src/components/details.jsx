import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ArrowLeftIcon } from "@heroicons/react/24/solid";
import Flag from "react-flagkit";
import axios from "axios";

function Details() {
  const { id } = useParams();
  const [cities, setCities] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    axios("http://localhost:4000/api/cities/" + id)
      .then((res) => {
        setCities(res.data.city);
      })
      .catch((err) => {
        console.error("Error fetching cities");
      });
  }, [id]);

  if (!cities) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex flex-col items-center bg-[url('/bgdetails.jpg')] bg-no-repeat bg-cover min-h-[90.7vh] justify-around">
      <div className="bg-blue-400 border-[2px] rounded-md min-w-[80vw] md:min-w-[40vw]">
        <div className="flex flex-col md:flex-row p-4">
          <div className="mt-2 pr-5 max-md:pb-3">
            <button
              className="bg-indigo-600 rounded-md p-2 text-white"
              onClick={() => navigate(-1)}
            >
              <ArrowLeftIcon className="w-4 h-4" />
            </button>
          </div>
          <div className="flex flex-col items-center md:flex-row md:gap-4">
            <div className="w-full md:w-1/2 h-[300px] md:h-[400px] mt-2">
              <img
                src={cities.url}
                alt={cities.name}
                className="rounded-lg border-2 object-cover md:w-80 md:h-72 w-full h-64"
              />
            </div>
            <div className="flex flex-col max-w-md">
              <div className="flex justify-between">
                <div className="flex flex-col pb-2">
                  <h2 className="text-white font-bold text-3xl md:text-4xl">
                    {cities.name}
                  </h2>
                  <h3 className="text-white font-semibold text-xl md:text-2xl">
                    {cities.country}
                  </h3>
                </div>
                <Flag country={cities.flag} size={70} />
              </div>
              <div className="text-white text-justify bg-blue-300 rounded-md shadow-md p-2 w-80">
                <p>{cities.history}</p>
              </div>
            </div>
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
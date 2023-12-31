import React from "react";
import Slider from "./slider";

function Landing() {
  return (
    <div className="w-full lg:h-[90.7vh] flex justify-around xl:gap-48 lg:gap-24 max-lg:block max-lg:w-full">
      <div className="block pt-60 pl-40 max-lg:pl-36 max-md:pl-24 max-sm:pl-18">
        <h1 className="text-3xl lg:text-5xl font-bold text-white">
          Find the perfect destination
        </h1>
        <div className="mt-8 lg:w-[30vw]">
          <p className="text-xl mb-10 text-white max-lg:text-justify max-lg:w-[70%]">
            Find your perfect trip, designed by insiders who know and love their cities!
          </p>
        </div>
        <button className="btn bg-indigo-600 font-semibold text-white hover:bg-indigo-400 py-3 px-8 rounded">View More</button>
      </div>
      <div className="md:mt-32 max-lg:text-center w-full ">
        <Slider/>
      </div>
    </div>
  );
}

export default Landing;

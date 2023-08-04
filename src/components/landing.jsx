import React from "react";
import "./landing.css";
import Slider from "./slider";

function Landing() {
  return (
    <div className="indexBg w-full h-screen flex justify-around md:gap-80 max-lg:block max-lg:h-max max-lg:w-full">
      <div className="landingInfo pl-40 max-lg:pl-36 max-md:pl-24 max-sm:pl-10">
        <h1 className="text-3xl lg:text-5xl font-bold text-white">
          Find the perfect destination
        </h1>
        <div className="landingSubtitle lg:w-[30vw]">
          <p className="text-xl mb-10 text-white max-lg:text-justify max-lg:w-[70%]">
            Our app will help you to find the perfect path for your next trip.
            With an easy-to-use interface and a host of itinerary options,
            planning your next trip has never been easier.
          </p>
        </div>
        <button className="btn bg-indigo-600 font-semibold text-white hover:bg-indigo-400 py-3 px-8 rounded">View More</button>
      </div>
      <div className="md:mt-48 max-lg:ml-12">
        <Slider/>
      </div>
    </div>
  );
}

export default Landing;

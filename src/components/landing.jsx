import React from "react";
import "./landing.css";
import Slider from "./slider";

function Landing() {
  return (
    <div className="indexBg w-full h-screen flex justify-around">
      <div className="landingInfo">
        <h1 className="text-3xl lg:text-5xl font-bold text-white">
          Find the perfect destination
        </h1>
        <div className="landingSubtitle">
          <p className="text-xl mb-10 text-white ">
            Our app will help you to find the perfect path for your next trip.
            With an easy-to-use interface and a host of itinerary options,
            planning your next trip has never been easier.
          </p>
        </div>
        <button className="btn bg-indigo-600 font-semibold text-white hover:bg-indigo-400 py-3 px-8 rounded">View More</button>
      </div>
      <Slider className="slider"/>
    </div>
  );
}

export default Landing;

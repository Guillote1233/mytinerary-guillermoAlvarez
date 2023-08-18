import React from "react";
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import { Carousel } from "react-responsive-carousel";

function Slider() {
  const dataCities = [
    {
      name: "Tokyo",
      country: "Japan",
      url: "/tokyo.jpg",
    },
    {
      name: "Madrid",
      country: "Spain",
      url: "/madrid.jpg",
    },
    {
      name: "Dubai",
      country: "EUA",
      url: "/dubai.jpg",
    },
    {
      name: "Paris",
      country: "France",
      url: "/paris.jpg",
    },
    {
      name: "Bangkok",
      country: "Thailand",
      url: "/bangkok.jpeg",
    },
    {
      name: "Punta Cana",
      country: "Dom. Rep.",
      url: "/puntacana.jpg",
    },
    {
      name: "New Delhi",
      country: "India",
      url: "/newdelhi.jpg",
    },
    {
      name: "Rome",
      country: "Italy",
      url: "/rome.jpg",
    },
    {
      name: "Seoul",
      country: "South Korea",
      url: "/seoul.jpg",
    },
    {
      name: "New York",
      country: "US",
      url: "/newyork.jpg",
    },
    {
      name: "Mar del Plata",
      country: "Argentina",
      url: "/mdq.jpg",
    },
    {
      name: "Moscow",
      country: "Russia",
      url: "/moscow.jpg",
    },
  ];
  const groups = [];
  while (dataCities.length > 0) {
    groups.push(dataCities.splice(0, 4));
  }

  return (
    <div className="flex flex-col max-md:pl-1 lg:w-[30vw] max-md:w-[50vw]">
      <h3 className="font-semibold text-2xl text-white xl:pl-48 max-xl:pl-36 lg:pl-24 md:pl-4 max-sm:pl-4 max-md:mt-11">Popular Mytineraries!</h3>
      <Carousel
        showArrows={true}
        showThumbs={false}
        showStatus={false}
        autoPlay
        infiniteLoop
        className="max-lg:pl-24 max-md:pl-12 max-sm:pl-2"
      >
        {groups.map((cityGroup, groupIndex) => (
          <div key={groupIndex} className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-2 p-2">
            {cityGroup.map((city, index) => (
              <div key={index} className="flex flex-col items-center">
                <img
                  src={city.url}
                  alt={`${city.name}, ${city.country}`}
                  className="w-32 md:w-40 h-32 md:h-40 rounded"
                />
                <p className="text-center mt-2 bg-black text-white rounded text-sm px-2 py-1">
                  {city.name} - {city.country}
                </p>
              </div>
            ))}
          </div>
        ))}
      </Carousel>
    </div>
  );
}

export default Slider;
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

  const size = window.innerWidth;

  return (
    <div className="flex flex-col max-md:pl-4">
      <h3 className=" font-semibold text-2xl text-white xl:pl-48 max-xl:pl-36 lg:pl-24 md:pl-4 max-sm:pl-4 max-md:mt-11">Popular Mytineraries!</h3>
      <Carousel showArrows={true} showThumbs={false} showStatus={false} autoPlay infiniteLoop width={ size <= 1024 ? "90%" : "70%"} className="max-lg:pl-24 max-md:pl-12 max-sm:pl-5">
        {groups.map((cityGroup, groupIndex) => (
          <div key={groupIndex} className="grid grid-cols-2 gap-4 p-10">
            {cityGroup.map((city, index) => (
              <div key={index}>
                <img
                  src={city.url}
                  alt={`${city.name}, ${city.country}`}
                  className="w-40 h-40 rounded"
                />
                <p className="text-center mt-0 bg-black text-white rounded lg:text-sm">
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
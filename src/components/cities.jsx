import React, { useState} from "react";
import Card from "./card";

function Cities() {
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
    // {
    //   name: "Seoul",
    //   country: "South Korea",
    //   url: "/seoul.jpg",
    // },
    // {
    //   name: "New York",
    //   country: "US",
    //   url: "/newyork.jpg",
    // },
    // {
    //   name: "Mar del Plata",
    //   country: "Argentina",
    //   url: "/mdq.jpg",
    // },
    // {
    //   name: "Moscow",
    //   country: "Russia",
    //   url: "/moscow.jpg",
    // },
  ];

  const [searchTerm, setsearchTerm] = useState("");

  const filteredCities = dataCities.filter((city) => city.name.toLowerCase().startsWith(searchTerm.toLowerCase()));

  return (
    <div className="flex flex-col items-center bg-gradient-to-t from-indigo-400 to-blue-400 min-h-[90.7vh] justify-around">
      <div className="font-semibold md:text-4xl text-2xl pt-20 pb-6">
      <h1 className="text-white">Find the best cities to travel!</h1>
      </div>
      <div className="p-4 bg-indigo-500 w-full h-20 flex items-center justify-center">
        <input type="text" placeholder="Search cities..." className="border-black rounded px-4 py-2 w-64 md:w-96" value={searchTerm} onChange={(e) => setsearchTerm(e.target.value)} />
      </div>
      <div className="flex content-center flex-wrap gap-4 max-w-screen-xl min-h-[60vh] p-4 justify-center">
        {filteredCities.length === 0 ? (
           <div className="w-full text-center">
            <img src="/nosearchresults.png" alt="No search results" className="w-80 h-80 p-5"/>
            <p className="text-white p-4 font-semibold text-2xl">No search results!</p>
           </div> 
        ) : (
          filteredCities.map((city) => (
          <Card key={city.name} data={city} />
        ))
        )}
      </div>
    </div>
  );
}

export default Cities;

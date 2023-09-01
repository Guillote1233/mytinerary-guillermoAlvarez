import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { HeartIcon } from "@heroicons/react/24/solid";
import { useDispatch, useSelector } from "react-redux";
import { getItineraries } from "../redux/actions/itineraryActions.js";
import { useParams } from "react-router-dom";

export default function Itineraries() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const itineraries = useSelector(
    (store) => store.itineraryReducer.itineraries
  );

  const [isOpenMap, setIsOpenMap] = useState({});
  const toggleOpen = (itineraryId) => {
    setIsOpenMap((prev) => ({
      ...prev,
      [itineraryId]: !prev[itineraryId],
    }));
  };

  useEffect(() => {
    dispatch(getItineraries({ id }));
  }, []);

  return (
    <div className="flex flex-col gap-2 w-full max-w-[30rem]">
      <h2 className="flex justify-center text-2xl font-bold text-white pb-4">
        Itineraries!
      </h2>
      {itineraries.length === 0 ? (
        <div className=" flex justify-center items-center w-full text-center">
          <img
              src="/nosearchresults.png"
              alt="No search results"
              className="w-24 h-24 p-5"
            />
          <p className="text-white p-4 font-semibold text-2xl">
            No itineraries yet for this city!
          </p>
        </div>
      ) : (
        itineraries.map((itinerary) => (
          <motion.div
            key={itinerary._id}
            transition={{ layout: { duration: 1, type: "spring" } }}
            layout
            className="card flex flex-col gap-2 bg-neutral-100 rounded-md w-full border-slate-950 border-[2px]"
          >
            <motion.div className="card flex gap-2 h-40">
              <motion.img
                src={itinerary.urlImage}
                alt={itinerary.itineraryName}
                className="min-h-[100%] w-[55%] object-cover"
              ></motion.img>
              <motion.div className="flex flex-col justify-between items-center text-center p-4">
                <motion.h3 className="font-semibold text-md">
                  {itinerary.itineraryName}
                </motion.h3>
                <motion.div className="flex gap-3 text-sm">
                  <HeartIcon className="w-5 h-5 text-red-700" />
                  {itinerary.likes}
                </motion.div>
                <motion.div>
                  <motion.button
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold p-1 rounded-full"
                    onClick={() => toggleOpen(itinerary._id)}
                  >
                    {isOpenMap[itinerary._id] ? "Collapse" : "View More"}
                  </motion.button>
                </motion.div>
              </motion.div>
            </motion.div>

            {isOpenMap[itinerary._id] && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
                exit={{ opacity: 0 }}
              >
                <div className="flex justify-between p-5 text-center">
                  <div className="flex flex-col items-center">
                    <h3 className="font-bold border-b-2 border-black">User</h3>
                    <img
                      src={itinerary.profilePicture}
                      alt="profile"
                      className="w-8 h-8 rounded-full mt-2"
                    />
                    <h4>{itinerary.profileName}</h4>
                  </div>
                  <div>
                    <h3 className="font-bold border-b-2 border-black mb-2">
                      Hashtag
                    </h3>
                    {itinerary.hashtags.map((tag, indexMap) => {
                      return <p key={indexMap}>{tag}</p>;
                    })}
                  </div>
                  <div>
                    <h3 className="font-bold border-b-2 border-black mb-2">
                      Duration
                    </h3>
                    <p>{itinerary.duration}</p>
                  </div>
                  <div>
                    <div>
                      <h3 className="font-bold border-b-2 border-black mb-2">
                        Price
                      </h3>
                      <span>{"💵".repeat(itinerary.price)}</span>
                    </div>
                  </div>
                </div>
                <div className="flex justify-center">
                  <img
                    src="/underconstruction.png"
                    alt="coming soon"
                    className="w-80 h-48"
                  />
                </div>
              </motion.div>
            )}
          </motion.div>
        ))
      )}
    </div>
  );
}

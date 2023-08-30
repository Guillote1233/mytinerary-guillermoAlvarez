import { createReducer } from "@reduxjs/toolkit";
import { getItineraries } from "../actions/itineraryActions.js";

const initialState = {
  itineraries: [],
};

const itineraryReducer = createReducer(initialState, 
  (builder) => builder
    .addCase(getItineraries.fulfilled, (state, action)=>{
      const newState = {...state, itineraries: action.payload}
      return newState
    })
    .addCase(getItineraries.rejected, (state, action)=>{
      const newState = {...state, itineraries: action.payload}
      return newState
    })
);

export default itineraryReducer
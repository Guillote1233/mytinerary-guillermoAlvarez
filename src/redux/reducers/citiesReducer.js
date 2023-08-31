import { createReducer } from "@reduxjs/toolkit";
import { getCities } from "../actions/citiesActions.js";

const initialState = {
  cities: [],
};

const citiesReducer = createReducer(initialState, 
  (builder) => builder
    .addCase(getCities.fulfilled, (state, action)=>{
      const newState = {...state, cities: action.payload}
      return newState
    })
    .addCase(getCities.rejected, (state, action)=>{
      const newState = {...state, cities: action.payload}
      return newState
    })
);

export default citiesReducer
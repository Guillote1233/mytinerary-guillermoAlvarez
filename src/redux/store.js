import { configureStore } from "@reduxjs/toolkit";
import itineraryReducer from './reducers/itineraryReducers.js'
import citiesReducer from "./reducers/citiesReducer.js";

export const store = configureStore({
    reducer:{
        citiesReducer,    
        itineraryReducer
    }
})
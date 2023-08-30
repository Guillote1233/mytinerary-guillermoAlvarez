import { configureStore } from "@reduxjs/toolkit";
import itineraryReducer from './reducers/itineraryReducers.js'

export const store = configureStore({
    reducer:{
        itineraryReducer
    }
})
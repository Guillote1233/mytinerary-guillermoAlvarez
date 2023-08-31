import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const getItineraries = createAsyncThunk('getItineraries', async ({id})=>{
    try {
      const res = await axios.get('http://localhost:4000/api/city-itineraries/byCity/' + id)
      return res.data
    } catch(error) {
      return []
    }
})

export {getItineraries}
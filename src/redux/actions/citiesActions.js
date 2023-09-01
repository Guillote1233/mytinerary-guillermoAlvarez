import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const getCities = createAsyncThunk('getCities', async (searchTerm)=>{
    try {
      const res = await axios.get('http://localhost:4000/api/cities')
      const filteredCities = res.data.cities.filter((city) =>
      city.name.toLowerCase().startsWith(searchTerm.toLowerCase().trim())
    )
      return filteredCities
    } catch(error) {
      return []
    }
})

export {getCities}
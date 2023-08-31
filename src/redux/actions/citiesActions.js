import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const getCities = createAsyncThunk('getCities', async ()=>{
    try {
      const res = await axios.get('http://localhost:4000/api/cities')
      console.log(res)
      return res.data.cities
    } catch(error) {
      return []
    }
})

export {getCities}
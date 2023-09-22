import { createAsyncThunk, createAction } from "@reduxjs/toolkit";
import axios from "axios";
import localSto from "../../../utils/localStorage.js";

export const userSignUpAction = createAsyncThunk("userSignUpAction", async (userData) => {
    try {
      const res = await axios.post('http://localhost:4000/api/auth', {...userData})
      console.log(res)
      return res.data

    } catch (error) {
      console.log(error)
      throw new Error (error)
    }
  }
);
export const userSignInAction = createAsyncThunk("userSignInAction", async (userData) => {
  try {
    const res = await axios.post('http://localhost:4000/api/auth/login', {...userData})
    console.log(res)
    return res.data

  } catch (error) {
    console.log(error)
    throw new Error (error)
  }
}
);
export const userSignInTokenAction = createAsyncThunk("userSignInTokenAction", async () => {
  try {
    const token = localSto.getText('token')
    const res = await axios.get('http://localhost:4000/api/auth/token', {
      headers:{
        Authorization: 'Bearer '+ token
      }
    })
    console.log(res)
    return res.data

  } catch (error) {
    console.log(error)
    throw new Error (error)
  }
}
);
export const userLogout = createAction("userLogout",()=>{
  return {
    payload:""
  }
});

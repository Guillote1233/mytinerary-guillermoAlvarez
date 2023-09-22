import { createReducer } from "@reduxjs/toolkit";
import {
  userSignUpAction,
  userSignInAction,
  userSignInTokenAction,
  userLogout
} from "../actions/userActions";
import localSto from "../../../utils/localStorage.js";
import { toast } from "react-toastify";

const initialState = {
  user: {},
  token: "",
  isOnline: false,
};

export const userReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(userSignUpAction.fulfilled, (state, action) => {
      localSto.set("token", action.payload.token);
      toast.success("Welcome to myTinerary " + action.payload.userData.name)
      return {
        ...state,
        user: action.payload.userData,
        token: action.payload.token,
        isOnline: true,
      };
    })
    .addCase(userSignInAction.fulfilled, (state, action) => {
      localSto.set("token", action.payload.token);
      toast.success("Welcome to myTinerary " + action.payload.userData.name)
      return {
        ...state,
        user: action.payload.userData,
        token: action.payload.token,
        isOnline: true,
      };
    })
    .addCase(userSignInTokenAction.fulfilled, (state, action) => {
      return {
        ...state,
        user: action.payload.userData,
        token: action.payload.token,
        isOnline: true,
      };
    })
    .addCase(userLogout, (state) => {
      console.log("llego?")
      localSto.remove('token')
      toast.success("You have been successfully logged out")
      return {
        ...state,
        user: {},
        token: "",
        isOnline: false,
      };
    }) 
})

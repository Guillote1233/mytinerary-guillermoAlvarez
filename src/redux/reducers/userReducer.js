import { createReducer } from "@reduxjs/toolkit";
import {
  userSignUpAction,
  userSignInAction,
  userSignInTokenAction,
  userLogout
} from "../actions/userActions";
import localSto from "../../../utils/localStorage.js";

const initialState = {
  user: {},
  token: "",
  isOnline: false,
};

export const userReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(userSignUpAction.fulfilled, (state, action) => {
      localSto.set("token", action.payload.token);
      return {
        ...state,
        user: action.payload.userData,
        token: action.payload.token,
        isOnline: true,
      };
    })
    .addCase(userSignInAction.fulfilled, (state, action) => {
      localSto.set("token", action.payload.token);
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
      return {
        ...state,
        user: {},
        token: "",
        isOnline: false,
      };
    }) 
})

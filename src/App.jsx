import React from "react";
import "./App.css";
import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import Landing from "./components/landing";
import Cities from "./components/cities";
import Details from "./components/details";
import Register from "./components/register";
import Login from "./components/login";
import { useDispatch, useSelector } from "react-redux";
import { userSignInTokenAction } from "./redux/actions/userActions";
import { GoogleOAuthProvider } from "@react-oauth/google";

const ProtectedRoutes = ({ children }) => {
  const isOnline = useSelector((state) => state.userReducer.isOnline);
  return <>{isOnline ? <Navigate to="/" /> : children}</>;
};

export default function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        { path: "/", element: <Landing /> },
        { path: "/cities", element: <Cities /> },
        { path: "/cities/:id", element: <Details /> },
        { path: "/register", element:<ProtectedRoutes><Register /></ProtectedRoutes> },
        { path: "/login", element: <ProtectedRoutes><Login /></ProtectedRoutes> },
      ],
    },
  ]);

  const dispatch = useDispatch();
  dispatch(userSignInTokenAction());

  return (
    <GoogleOAuthProvider clientId="253257293969-0rp5a9sjdanholc369p37bgaa9e4sjvo.apps.googleusercontent.com">
      <RouterProvider router={router} />
    </GoogleOAuthProvider>
  );
}

import React, { useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { userSignUpAction } from "../redux/actions/userActions";
import { useNavigate, Link } from "react-router-dom";
import { unwrapResult } from "@reduxjs/toolkit";
import { useGoogleLogin } from "@react-oauth/google";

function Register() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const countries = [
    "Argentina",
    "Brazil",
    "Spain",
    "France",
    "Japan",
    "United States",
    "Australia",
    "Germany",
    "Italy",
  ];
  const [userData, setuserData] = useState({
    name: "",
    surname: "",
    email: "",
    password: "",
    profilePicture: undefined,
    country: undefined,
  });
  const handleChangeData = (e) => {
    setuserData({
      ...userData,
      [e.target.id]: e.target.value,
    });
  };
  const handleClick = async () => {
    const actionResult = await dispatch(userSignUpAction(userData));
    const result = await unwrapResult(actionResult);
    if (result.token) {
      navigate("/");
    }
  };
  const handleClickWithGoogle = useGoogleLogin({
    onSuccess: async (tokenResponse) => {
      const infoUser = await axios.get(
        "https://www.googleapis.com/oauth2/v3/userinfo",
        {
          headers: {
            Authorization: "Bearer " + tokenResponse.access_token,
          },
        }
      );
      const data = {
        email: infoUser.data.email,
        password: infoUser.data.family_name + "Ñ*203",
        name: infoUser.data.name,
        surname: infoUser.data.family_name,
        profilePicture: infoUser.data.picture,
        country: "Argentina",
      };
      const actionResult = await dispatch(userSignUpAction(data));
      const result = await unwrapResult(actionResult);
      if (result.token) {
        navigate("/");
      }
    },
  });

  return (
    <div className="form flex justify-center items-center min-h-[82.5vh]">
      <div className="form-body p-4 flex flex-col items-start bg-cyan-300 rounded-md gap-2">
        <div>
          <label htmlFor="name">First Name </label>
          <input
            type="text"
            id="name"
            placeholder="First Name"
            onChange={(e) => handleChangeData(e)}
          />
        </div>
        <div>
          <label htmlFor="surname">Last Name </label>
          <input
            type="text"
            id="surname"
            placeholder="LastName"
            onChange={(e) => handleChangeData(e)}
          />
        </div>
        <div>
          <label htmlFor="email">Email </label>
          <input
            type="email"
            id="email"
            placeholder="Email"
            onChange={(e) => handleChangeData(e)}
          />
        </div>
        <div>
          <label className="form__label" htmlFor="password">
            Password{" "}
          </label>
          <input
            type="password"
            id="password"
            placeholder="Password"
            onChange={(e) => handleChangeData(e)}
          />
        </div>
        <div>
          <label htmlFor="profilePicture">Profile Picture</label>
          <input
            type="text"
            id="profilePicture"
            placeholder="Url for picture"
            onChange={(e) => handleChangeData(e)}
          />
        </div>
        <div>
          <label htmlFor="country">Country </label>
          <select
            id="country"
            placeholder="Country"
            onChange={(e) => handleChangeData(e)}
          >
            {countries.map((country, indexMap) => {
              return (
                <option key={indexMap} value={country}>
                  {country}
                </option>
              );
            })}
          </select>
        </div>
        <div>
          <button
            type="button"
            className="btn bg-indigo-600 p-2 rounded-md"
            onClick={handleClick}
          >
            Sign In
          </button>
        </div>
        <div>
          <button
            type="button"
            className="btn bg-indigo-600 p-2 rounded-md"
            onClick={handleClickWithGoogle}
          >
            Sign In with Google
          </button>
        </div>
        <div>
          <Link to="/login">Already have an account? Login now</Link>
        </div>
      </div>
    </div>
  );
}
export default Register;

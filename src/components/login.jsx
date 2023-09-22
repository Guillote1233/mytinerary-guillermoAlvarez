import React, {useState} from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { userSignInAction } from '../redux/actions/userActions';
import { useNavigate } from 'react-router-dom';
import { unwrapResult } from '@reduxjs/toolkit';
import { useGoogleLogin } from '@react-oauth/google';

function Login() {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [userData, setuserData] = useState({
        email:"",
        password:""
    });
    const handleChangeData = (e)=>{
      setuserData({
        ...userData,
        [e.target.id]: e.target.value
      })
    }
    const handleClick = async()=>{
        const actionResult = await dispatch(userSignInAction(userData))
        const result = await unwrapResult(actionResult)
        if(result.token){
          navigate('/')
        }
      }
    const handleClickWithGoogle = useGoogleLogin({
        onSuccess: async tokenResponse => {
            const infoUser = await axios.get('https://www.googleapis.com/oauth2/v3/userinfo', {
                headers:{
                    Authorization:'Bearer ' + tokenResponse.access_token
                }
            })
            const data = {
                email: infoUser.data.email,
                password: infoUser.data.family_name + "Ñ*203"
            }
            const actionResult = await dispatch(userSignInAction(data))
            const result = await unwrapResult(actionResult)
            if(result.token){
              navigate('/')
            }
        }
    })
    return(
      <div className="form flex justify-center items-center min-h-[82.5vh]">
          <div className="form-body">
              <div>
                  <label htmlFor="email">Email </label>
                  <input type="email" id="email" placeholder="Email" onChange={(e)=>handleChangeData(e)}/>
              </div>
              <div>
                  <label className="form__label" htmlFor="password">Password </label>
                  <input  type="password" id="password" placeholder="Password" onChange={(e)=>handleChangeData(e)}/>
              </div>
          </div>
          <div>
              <button type="button" className="btn bg-indigo-600 m-2" onClick={handleClick}>Sign In</button>
          </div>
          <div>
              <button type="button" className="btn bg-indigo-600 m-2" onClick={handleClickWithGoogle}>Sign In with Google</button>
          </div>
      </div>      
    )       
}
export default Login;
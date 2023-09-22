import React from 'react'
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import MainLayout from './layout/MainLayout';
import Landing from './components/landing';
import Cities from './components/cities';
import Details from './components/details';
import Register from './components/register';
import Login from './components/login';
import { useDispatch } from 'react-redux';
import { userSignInTokenAction } from './redux/actions/userActions';
import { GoogleOAuthProvider } from '@react-oauth/google';

export default function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <MainLayout/>,
      children: [
        {path:'/', element: <Landing/>},
        {path: '/cities', element: <Cities/>},
        {path:'/cities/:id', element: <Details/>},
        {path:'/register', element:<Register/>},
        {path:'/login', element:<Login/>}
      ]
    }
  ])

  const dispatch = useDispatch()
  dispatch(userSignInTokenAction())
  
  return (
    <GoogleOAuthProvider clientId='253257293969-0rp5a9sjdanholc369p37bgaa9e4sjvo.apps.googleusercontent.com'>
      <RouterProvider router={router}/>
    </GoogleOAuthProvider>
  )
}
import React from 'react'
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import MainLayout from './layout/MainLayout';
import Landing from './components/landing';
import Cities from './components/cities';

export default function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <MainLayout/>,
      children: [
        {path:'/', element: <Landing/>},
        {path: '/cities', element: <Cities/>}
      ]
    }
  ])

  return (
      <RouterProvider router={router}/>
  )
}
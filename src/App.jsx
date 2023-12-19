import { useState } from 'react'
import Navbar from './Components/Navbar'
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import IndexPage from './Components/IndexPage';
import Layout from './Components/Layout';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<IndexPage/>}/>
    </Route>
  )
);

function App() {

  return (
    <>
      <RouterProvider router={router}/>
    </>

    
  )
}

export default App

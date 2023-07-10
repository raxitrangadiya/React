import { createBrowserRouter } from "react-router-dom";
import React,{ Suspense } from "react";
import Mainnavbar from './navbar/navbar.jsx'
import Home from './navbar/home.jsx'
const router = createBrowserRouter([
    {
        path: "/",
        element:<><Home/></>

    }
])
export default router
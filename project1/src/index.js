import React from 'react';
import ReactDOM from 'react-dom/client';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import {RouterProvider,} from "react-router-dom";
import Navbar from './Component/Navbar/navbar';
import routerdata from './Component/router.jsx'
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <Navbar/>
    <RouterProvider router={routerdata}/>  
  </>
);


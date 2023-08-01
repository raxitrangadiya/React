import React from 'react';
import Routerdata from './component/MainRouter'
import { RouterProvider,} from "react-router-dom";
import "./App.css"
// import CustomJs from "./custom.js"
const App = () => {
  return (
    <>
      <RouterProvider router={Routerdata} />
    </>
  );
};
export default App;
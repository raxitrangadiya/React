import React, { Component } from "react";
import { Link, Outlet } from "react-router-dom";

class Classwork extends Component {
  render() {
    return (
      <div className="container">
        <div className="row mt-5 text-center">
          <h3 className="text-danger">&#171;   Functional & classcomponent Example   &#187;</h3>
        </div>
        <div className="row">
          <h3 className="my-4 text-light">What is Component :</h3>
          <p className="fs-4">Components let you split the UI into independent, reusable pieces, and think about each piece in isolation. This page provides an introduction to the idea of components. You can find a detailed component API reference here.</p>
        </div>
        <div className="row mt-5">
          <div className="col-lg-6  bg-info bg-opacity-10 bg-gradient text-center">
            <Link to="classcompo">
              <h3  className="text-danger  p-1">1.Classcomponent Example</h3>
            </Link>
          </div>

          <div className="col-lg-6 bg-info bg-opacity-10 bg-gradient text-center ">
            <Link to="functional">
              <h3 className="text-warning p-1" >2.Functional Example</h3>
            </Link>
          </div>
        </div>
   
        <div className="row">
          <div className="col">
            <Outlet></Outlet>
          </div>
        </div>
      </div>
    );
  }
}

export default Classwork;
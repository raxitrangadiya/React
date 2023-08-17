import React from "react";
import { NavLink, Outlet } from "react-router-dom";
// import {} from 'react-router-dom'
function Functionmenu() {
  return (
    <>
      <div className="row my-5">
        <div className="col-lg-6 offset-lg-6 ">
          <ol>
            <li className="fs-3 text-warning "><NavLink to="intro">Function intro</NavLink></li>
            <li className="fs-3 text-warning "><NavLink to="stateinfunctional">State in function component</NavLink></li>
            <li className="fs-3 text-warning "><NavLink to="propsinfunctional">Props in function component</NavLink></li>
            <li className="fs-3 text-warning "><NavLink to="useeffectinfunctional">Use effect in function component</NavLink></li>

          </ol>
        </div>
        <Outlet></Outlet>
      </div>
    </>
  );
}
export default Functionmenu;

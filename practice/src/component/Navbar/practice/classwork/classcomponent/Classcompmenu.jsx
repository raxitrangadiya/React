import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const Classcompmenu = () => {
  return (
    <>
    <div className="container mb-5">
      <div className="row">
        <div >
          <ol>
            <li className="fs-3 text-danger "><NavLink to="classintro">Class intro </NavLink></li>
            <li className="fs-3 text-danger "><NavLink to="stateinclass">State method </NavLink></li>
            <li className="fs-3 text-danger "><NavLink to="propsinclass">Props method </NavLink></li>
            <li className="fs-3 text-danger "><NavLink to="lifecycle">Life cycle in classcomponent </NavLink></li>
            <li className="fs-3 text-danger "><NavLink to="Statelifecycleloader">Lifecycle loader in classcomponent </NavLink></li>
<<<<<<< HEAD
            <li className="fs-3 text-danger "><NavLink to="listinclasscomponent">List in class Component</NavLink></li>
=======
>>>>>>> 0f215ed3cc1a9bce9d94d1bff53a913b1bbdfe33
          </ol>
      <Outlet></Outlet>
        </div>
      </div>
      </div>
    </>
  );
};
export default Classcompmenu;

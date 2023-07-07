import React from "react";
import Logo from "./asset/img/logo.png";
import "./asset/css/hed.css";
const Header = () => {
  return (
    <>
      {/* /* section -1 */ }
      <p className="welcome">wel come to raxit project !!!</p>
      <div className="container">
        <nav>
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Menu</a>
            </li>
            <li>
              <a href="#">Contact us</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Product</a>
            </li>
            <li>
              <a href="#">Services</a>
            </li>
          </ul>
          <div className="logo">
            <img src={Logo} alt="" srcset="" />
          </div>
        </nav>
      </div>
      {/* section-2 */}
      <div className="container">

      </div>
    </>
  );
};
export default Header;

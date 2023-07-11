import React, { useState } from "react";
import {
  MDBNavbar,
  MDBContainer,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBCollapse,
  MDBBtn,
  MDBIcon,
  MDBNavbarNav,
  MDBInputGroup,
} from "mdb-react-ui-kit";
import { Link } from "react-router-dom";
export default function App() {
  const [showNavNoTogglerSecond, setShowNavNoTogglerSecond] = useState(false);

  return (
    <>
      <MDBNavbar expand="lg" light bgColor="white">
        <MDBContainer fluid>
          <MDBNavbarBrand href="#">Router </MDBNavbarBrand>
          <MDBNavbarToggler
            type="button"
            data-target="#navbarTogglerDemo02"
            aria-controls="navbarTogglerDemo02"
            aria-expanded="false"
            aria-label="Toggle navigation"
            onClick={() => setShowNavNoTogglerSecond(!showNavNoTogglerSecond)}
          >
            <MDBIcon icon="bars" fas />
          </MDBNavbarToggler>
          <MDBCollapse navbar show={showNavNoTogglerSecond}>
            <MDBNavbarNav className="mr-auto mb-2 mb-lg-0">
              <MDBNavbarItem>
                <Link active aria-current="page"   to="/">Home</Link>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <Link active  to="Link">Link</Link>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <Link active  to="Product">Product</Link>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <Link active  to="Contact">Contact us</Link>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <Link active  to="aa">Accessories</Link>
              </MDBNavbarItem>
            </MDBNavbarNav>
            <MDBInputGroup tag="form" className="d-flex w-auto mb-3">
              <input
                className="form-control"
                placeholder="search"
                aria-label="Search"
                type="Search"
              />
              <MDBBtn outline>Search</MDBBtn>
            </MDBInputGroup>
          </MDBCollapse>
        </MDBContainer>
      </MDBNavbar>
    </>
  );
}

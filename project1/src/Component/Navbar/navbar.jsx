import React, { useState } from 'react';
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBIcon,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBBtn,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem,
  MDBCollapse,
} from 'mdb-react-ui-kit';
import { Link } from "react-router-dom";
export default function App() {
  const [showBasic, setShowBasic] = useState(false);

  return (
    <MDBNavbar expand='lg' className='text-white' bgColor='dark'>
      <MDBContainer fluid>
        <MDBNavbarBrand href='#'><img src='https://www.google.com/logos/doodles/2023/celebrating-pani-puri-6753651837110029-6752733080609317-cst.png'/></MDBNavbarBrand>
        <MDBNavbarToggler
          aria-controls='navbarSupportedContent'
          aria-expanded='false'
          aria-label='Toggle navigation'
          onClick={() => setShowBasic(!showBasic)}
        >
          <MDBIcon icon='bars' fas />
        </MDBNavbarToggler>

        <MDBCollapse navbar show={showBasic}>
          <MDBNavbarNav className='mr-auto mb-2 text-primary mb-lg-0'>
            <MDBNavbarItem>
              <Link className='nav-link text-white' to='/'>Home</Link>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <Link className='nav-link text-white' to='/card'>Card</Link>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <Link className='nav-link text-white' to='/product'>Product</Link>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <Link className='nav-link text-white' to='/contact'>Contact</Link>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <Link className='nav-link text-white' to='/accessories'>Accessories</Link>
            </MDBNavbarItem>
          </MDBNavbarNav>
          <form className='d-flex input-group w-auto'>
            <input type='search' className='form-control' placeholder='search' aria-label='Search' />
            <MDBBtn color='danger'>Search</MDBBtn>
          </form>
        </MDBCollapse>
      </MDBContainer>
    </MDBNavbar>
  );
}
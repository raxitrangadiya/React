import React, { useState } from 'react';
import Logo from "../../asset/images/logo.png"
import './navbarcustom.css'
import{
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBIcon,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBBtn,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem,
  MDBCollapse,
} from 'mdb-react-ui-kit';
import { NavLink } from "react-router-dom";
export default function App() {
  const [showBasic, setShowBasic] = useState(false);

  return (
    <MDBNavbar expand='lg' className='shadow-lg' color="white" bgColor='dark' sticky >
      <MDBContainer fluid>
        <MDBNavbarBrand className='logo' href='#'>
          <img src={Logo} alt="logo" /></MDBNavbarBrand>
        <MDBNavbarToggler
          aria-controls='navbarSupportedContent'
          aria-expanded='false'
          aria-label='Toggle navigation'
          onClick={() => setShowBasic(!showBasic)}
        >
          <MDBIcon icon='bars' fas />
        </MDBNavbarToggler>

        <MDBCollapse navbar show={showBasic}>
          <MDBNavbarNav className='mr-auto mb-2 mb-lg-0'>
            <MDBNavbarItem>
            <NavLink className='Nav-link' to='/'>Home</NavLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
                  <NavLink className='Nav-link' to='/skill'>Skill</NavLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
                  <NavLink className='Nav-link' to='/project'>Project</NavLink>
            </MDBNavbarItem>
      
            <MDBNavbarItem>
                  <NavLink className='Nav-link' to='/aboutus'>About us </NavLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
                  <NavLink className='Nav-link' to='/contactus'>Contact us </NavLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBDropdown  className='Nav-link'>
                <MDBDropdownToggle   tag="a"  className='Nav-link ' role='button'>
                Practice
                </MDBDropdownToggle>
                <MDBDropdownMenu >
                  <MDBDropdownItem >
                  <NavLink className='practice fw-medium' to='/classwork'>Class work </NavLink>
                  </MDBDropdownItem>
                  <MDBDropdownItem >
                  <NavLink className='practice fw-medium' to='/mywork'>My work </NavLink>
                  </MDBDropdownItem>
                </MDBDropdownMenu>
              </MDBDropdown>
            </MDBNavbarItem>
          </MDBNavbarNav>
l          <form className='d-flex input-group w-auto'>
            <input type='search' className='form-control' placeholder='Type query' aria-label='Search' />
            <MDBBtn color='danger'>Search</MDBBtn>
          </form>
        </MDBCollapse>
      </MDBContainer>
    </MDBNavbar>
  );
}
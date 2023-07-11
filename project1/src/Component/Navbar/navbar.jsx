// import React, { useState } from "react";
// import {
//   MDBNavbar,
//   MDBContainer,
//   MDBNavbarBrand,
//   MDBNavbarToggler,
//   MDBNavbarItem,
//   MDBNavbarLink,
//   MDBCollapse,
//   MDBBtn,
//   MDBIcon,
//   MDBNavbarNav,
//   MDBInputGroup,
// } from "mdb-react-ui-kit";
// import { Link } from "react-router-dom";
// export default function App() {
//   const [showNavNoTogglerSecond, setShowNavNoTogglerSecond] = useState(false);

//   return (
//     <>
//       <MDBNavbar expand="lg" light bgColor="white">
//         <MDBContainer fluid>
//           <MDBNavbarBrand href="#">Router </MDBNavbarBrand>
//           <MDBNavbarToggler
//             type="button"
//             data-target="#navbarTogglerDemo02"
//             aria-controls="navbarTogglerDemo02"
//             aria-expanded="false"
//             aria-label="Toggle navigation"
//             onClick={() => setShowNavNoTogglerSecond(!showNavNoTogglerSecond)}
//           >
//             <MDBIcon icon="bars" fas />
//           </MDBNavbarToggler>
//           <MDBCollapse navbar show={showNavNoTogglerSecond}>
//             <MDBNavbarNav className="mr-auto mb-2 mb-lg-0">
//               <MDBNavbarItem>
//                 <Link  aria-current="page"  className="nav-item"  to="/">Home</Link>
//               </MDBNavbarItem>
//               <MDBNavbarItem>
//                 <Link  className="nav-item" to="/link">Link</Link>
//               </MDBNavbarItem>
//               <MDBNavbarItem>
//                 <Link  className="nav-item" to="/product">Product</Link>
//               </MDBNavbarItem>
//               <MDBNavbarItem>
//                 <Link  className="nav-item" to="/contact">Contact us</Link>
//               </MDBNavbarItem>
//               <MDBNavbarItem>
//                 <Link  className="nav-item" to="/accessories">Accessories</Link>
//               </MDBNavbarItem>
//             </MDBNavbarNav>
//             <MDBInputGroup tag="form" className="d-flex w-auto mb-3">
//               <input
//                 className="form-control"
//                 placeholder="search"
//                 aria-label="Search"
//                 type="Search"
//               />
//               <MDBBtn outline>Search</MDBBtn>
//             </MDBInputGroup>
//           </MDBCollapse>
//         </MDBContainer>
//       </MDBNavbar>
//     </>
//   );
// }

import React, { useState } from "react";
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
} from "mdb-react-ui-kit";
import { Link } from "react-router-dom";

export default function App() {
  const [showBasic, setShowBasic] = useState(false);

  return (
    <MDBNavbar   expand="lg" light bgColor="light"  >
      <MDBContainer fluid >
        <MDBNavbarBrand href="#">Navbar</MDBNavbarBrand>

        <MDBNavbarToggler
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
          onClick={() => setShowBasic(!showBasic)}
        >
          <MDBIcon icon="bars" fas />
        </MDBNavbarToggler>

        <MDBCollapse navbar show={showBasic}>
          <MDBNavbarNav className="mr-auto mb-2 mb-lg-0">
            <MDBNavbarItem>
              <Link className="nav-link" active aria-current="page" to="/">
                Home
              </Link>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <Link className="nav-link" active aria-current="page" to="/link">
                Link
              </Link>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <Link className="nav-link" active aria-current="page" to="/product">
                Product
              </Link>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <Link className="nav-link" active aria-current="page" to="/contact">
                Contact us
              </Link>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <Link className="nav-link" active aria-current="page" to="/accessories">
                Accessories
              </Link>
            </MDBNavbarItem>
          </MDBNavbarNav>

          <form className="d-flex input-group w-auto">
            <input
              type="search"
              className="form-control"
              placeholder="Type query"
              aria-label="Search"
            />
            <MDBBtn color="primary">Search</MDBBtn>
          </form>
        </MDBCollapse>
      </MDBContainer>
    </MDBNavbar>
  );
}

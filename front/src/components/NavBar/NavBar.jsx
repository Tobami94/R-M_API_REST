import React from "react";
import SearchBar from "../SearchBar/SearchBar";
import { NavLink } from "react-router-dom";
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBCollapse,
} from "mdb-react-ui-kit";

import repository from "./icon_repository.png";

class NavBar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <MDBNavbar expand="lg" style={{ backgroundColor: "#549c10" }}>
          <MDBContainer fluid>
            <MDBNavbarBrand href="#">
              <img src={repository} alt="" />
            </MDBNavbarBrand>

            <MDBCollapse navbar>
              <MDBNavbarNav className="mr-auto mb-2 mb-lg-0">
                <MDBNavbarItem>
                  <MDBNavbarLink active aria-current="page">
                    <NavLink className="nav-link" to="/home">
                      {" "}
                      Home{" "}
                    </NavLink>
                  </MDBNavbarLink>
                </MDBNavbarItem>
                <MDBNavbarItem>
                  <MDBNavbarLink active aria-current="page">
                    <NavLink className="nav-link" to="/favorites">
                      Favorites
                    </NavLink>
                  </MDBNavbarLink>
                </MDBNavbarItem>
                <MDBNavbarItem>
                  <MDBNavbarLink active aria-current="page">
                    <NavLink className="nav-link" to="/Projects">
                      Other project's
                    </NavLink>
                  </MDBNavbarLink>
                </MDBNavbarItem>

                <MDBNavbarItem>
                  <MDBNavbarLink href="#">
                    <NavLink className="nav-link" to="/about">
                      About
                    </NavLink>
                  </MDBNavbarLink>
                </MDBNavbarItem>
              </MDBNavbarNav>
              <SearchBar onSearch={this.props.onSearch} />
            </MDBCollapse>
          </MDBContainer>
        </MDBNavbar>
        <br></br>
      </div>
    );
  }
}

export default NavBar;

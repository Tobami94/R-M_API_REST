import React, { useState } from "react";
import { NavLink } from "react-router-dom";
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
  MDBCollapse,
} from "mdb-react-ui-kit";

import repository from "./icon_repository.png";

const NavBar = (props) => {
  const [showBasic, setShowBasic] = useState(false);

  const [character, setCharacter] = useState("");

  const handleInputChange = (event) => {
    const value = event.target.value;
    setCharacter(value);
  };

  return (
    <div>
      <MDBNavbar expand="lg" style={{ backgroundColor: "#549c10" }}>
        <MDBContainer fluid>
          <MDBNavbarBrand href="#">
            <img src={repository} alt="" />
          </MDBNavbarBrand>

          <MDBNavbarToggler
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
            onClick={() => setShowBasic(!showBasic)}>
            <MDBIcon icon="bars" fas />
          </MDBNavbarToggler>

          <MDBCollapse navbar show={showBasic}>
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
            <div class="input-group">
              <div class="form-outline">
                <input
                  id="form1"
                  class="form-control"
                  type="search"
                  value={character}
                  onChange={handleInputChange}
                  placeholder=" enter id character"
                />
              </div>
              <button
                type="button"
                class="btn btn-primary"
                style={{ backgroundColor: "#38680b" }}
                onClick={() => {
                  props.onSearch(character);
                  setCharacter("");
                }}>
                Search
              </button>
            </div>
          </MDBCollapse>
        </MDBContainer>
      </MDBNavbar>
      <br></br>
    </div>
  );
};

export default NavBar;

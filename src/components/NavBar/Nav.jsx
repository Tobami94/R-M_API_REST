import React from "react";
import NavStyle from "./Nav.module.css"
import SearchBar from "./SearchBar"
import { NavLink } from "react-router-dom";



const Nav = (props) => {

    return ( 
         <div className={NavStyle.navContainer}>
 <ul className={NavStyle.menu}>
 <div className={NavStyle.options}>
   <li>
      <NavLink to="/home"><button className={NavStyle.botonHome}>Home</button></NavLink>
      </li>
        <li>
         <NavLink to="/about"><button className={NavStyle.botonAbout}>About</button></NavLink>
         </li>
        </div></ul>
            <SearchBar onSearch={props.onSearch} />
         </div>
      );
         }

         
export default Nav;
import React from "react";
import '../styles/Navbar.css'
import logo from '../assets/logo.png'
import { NavLink } from "react-router-dom";

function NavBar() {
 
  return (
    <>
      <div className="nav-bar border-bottom pb-3 bg-white">
        <NavLink to="/">
          <img src={logo} alt="Astronix Logo" width="auto" height="50vh"/>
        </NavLink>
      </div>
      <div className="nav-links">
        <ul>
          <li><NavLink to="/spacecrafts" className={({isActive}) => { 
            return isActive ? "active" : ""
          }}>Spacecrafts</NavLink></li>

          <li><NavLink to="/launches" className={({isActive}) => { 
            return isActive ? "active" : ""
          }}>Launches</NavLink></li>

          <li><NavLink to="/vehicles" className={({isActive}) => { 
            return isActive ? "active" : ""
          }}>Vehicles</NavLink></li>
        </ul>
      </div>
    </>
  );
}

export default NavBar;

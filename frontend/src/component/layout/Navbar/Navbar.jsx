import React from "react";
import "./Navbar.css"
import { Link } from "react-router-dom";
import searchico from ".././../../images/searchw.png"
import logSign from ".././../../images/log_sign.png"
// import search from "../../images/Search.png"
// import menu from "../../images/menu.png"


const Navbar = () => {
  return (
    <>
      <header>
        <div className="leftnav">
          <p>Grab-Deal</p>
        </div>
        <div className="midnav">
            <Link to="/">Home</Link>
            <Link to="/products">Products</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contacts</Link>
        </div>
        <div className="rightnav">
          <Link to="/Search"><img src={searchico} alt="Search" /></Link>
          <Link to="/login"><img src={logSign} alt="User" /></Link>
        </div>
      </header>
      
    </>
  );
};

export default Navbar;

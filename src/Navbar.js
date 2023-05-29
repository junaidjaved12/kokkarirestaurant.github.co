import React, { useState } from 'react';

import { Link } from "react-router-dom";
import logo from './logo.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (

    <>

    <div className=' d-flex justify-content-center'>
        <img src={logo}  className="rest img-fluid " />
        </div>
    <nav className="navbar navbar-expand-md navbar-light bg-light">
     <img src={logo}  className="hid img-fluid" />
     <button className={`navbar-toggler ${isOpen ? 'collapsed' : ''}`}
        type="button"
        onClick={toggleNavbar}>
    <span className="navbar-toggler-icon"></span>
  </button>
      {/* <button
        className={`navbar-toggler ${isOpen ? 'collapsed' : ''}`}
        type="button"
        onClick={toggleNavbar}
      >
        <span className="navbar-toggler-icon"></span>
      </button> */}
      
      <div className={`collapse navbar-collapse justify-content-center ${isOpen ? 'show' : ''}`}>
        
        <ul className="navbar-nav ml-auto">
         <li className="nav-item">
        <Link className="nav-link" to='/'>ABOUT</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to='/cuisine'>CUISINE</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to='/menu'>MENUS</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to='/reservation'>RESERVATIONS</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to='/private dining'>PRIVATE DINING</Link>
      </li>
        </ul>
      </div>
      
    </nav>
    </>
  );
};

export default Navbar;

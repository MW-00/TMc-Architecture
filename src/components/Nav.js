import React from "react"
import { Link, NavLink } from "react-router-dom"

import logo from "../images/logos/tmc.png"
// import '../main.css';
const Navbar = () => {
  return (

    <header className="mb-5 mt-2 mt-lg-5">
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid d-flex justify-content-between mx-0 px-0">
          <div>
            <Link to="/" className="navbar-brand text-center">
              <img className="logo" src={logo} alt="TM-A" />
            </Link>
          </div>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse " id="navbarNavAltMarkup">
            <div className="navbar-nav ms-auto mt-md-0 mt-3">
              <NavLink className="nav-link" to="/">HOME</NavLink>
              <NavLink className="nav-link" to="/projects">PROJECTS</NavLink>
              <NavLink className="nav-link" to="/about">ABOUT</NavLink>
              <NavLink className="nav-link" to="/contact">CONTACT</NavLink>
            </div>
          </div>
        </div>
      </nav>
    </header>

  );
}

export default Navbar;
import React from "react";
import "./navbar.css";
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <>
        <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <img src="/images/logo.jpg" alt="logo-image" className="logo" />
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-auto">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to ="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/projects">Projects</Link></li>
                <li className="nav-item">
                <Link className="nav-link active" to="/About">About Us</Link></li>
            
            <li className="nav-item">
                <Link className="nav-link active" to="/Terms">Terms & Conditions</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link active" to="/Contact">Contact</Link>
            </li>
            </ul>
            <form className="d-flex" role="search">
            <button className="btn btn-navbar hero-left-btn" type="submit">Contact Us</button>
            </form>
          </div>
        </div>
      </nav>
        </>
    )
}

export default Navbar;

import React from "react";
import { Link } from "react-router-dom";
import './Navbar.css'

const Navbar = () => {
  return (
    <div>
      <nav className="navbar bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="https://www.guvi.in/">
            <img
              src="https://www.guvi.in/blog/wp-content/themes/guvi-blog/assets/images/guvi-logo.svg"
              alt="Logo"
              width="30"
              height="34"
              className="d-inline-block align-text-top"
              
            />
            
          </a>
          <nav className="navbar navbar-expand-lg bg-body-success">
  <div className="container-fluid">
    
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link to="/">All</Link>
        </li>
        <li className="nav-item">
          <Link to="/fsd">Full Stack Development</Link>
        </li>
        <li className="nav-item">
          <Link to="/ds">Data Science</Link>
        </li>
        <li className="nav-item">
          <Link to="/cs">Cyber Secuity</Link>
        </li>
        <li className="nav-item">
          <Link to="/devops">DevOps</Link>
        </li>
        
        
      </ul>
    </div>
  </div>
  </nav>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;

import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';

const navbar = () => {
    return (
        
        <header id="header" className="fixed-top shadow-sm">
        <div className="container d-flex align-items-center justify-content-between">
        <Nav.Link as={Link} to="/home"><a className="navbar-brand" href="#"><img src="assets/imgs/logo.svg" alt="Logo"></img></a></Nav.Link>      
         <a href="index.html" className="logo"><img src="assets/imgs/logo.png" alt="" className="img-fluid"></img></a>
          <nav id="navbar" className="navbar">
            <ul>
            <Nav.Link as={Link} to="/categorypage">Category</Nav.Link>
                <Nav.Link as={Link} to="/benefits">Benefits</Nav.Link>
                <Nav.Link as={Link} to="/features">Features</Nav.Link>
                <Nav.Link as={Link} to="/detailpage">Resources</Nav.Link>
                <Nav.Link as={Link} to="/registerpage"><li><a className="getstarted scrollto" href="#">Register</a></li></Nav.Link>
                <Nav.Link as={Link} to="/signinpage"><li><a className="getstarted scrollto ms-2" href="#">Sign In</a></li></Nav.Link>
            </ul>
            <i className="bi bi-list mobile-nav-toggle"></i>
          </nav>
        </div>
      </header>
    )
}

export default navbar;
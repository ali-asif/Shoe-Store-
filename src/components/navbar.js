import React from "react";
import {Link} from "react-router-dom"
import { Navbar, Nav } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const Navigation = () => {
  return (
    <div>
      <Navbar bg="light" expand="lg" sticky="top">
        <Navbar.Brand href="/" exact><Link to="/">
          <img
            src="https://www.vhv.rs/dpng/d/436-4364745_adidas-logo-png-images-free-download-red-adidas.png"
            width="70px"
            alt=" "
          ></img>
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
                    
            <Nav.Link><Link to="/Products">Products</Link></Nav.Link>
            <Nav.Link href="#link">About us</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Navigation;

import React from "react";
import { Link as NavLink } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";

const NavbarComponent = () => {
  return (
    // <div>
    //   <nav className="navbar  fixed-top navbar-expand-lg navbar-dark bg-dark">
    //     <div className="container-fluid">
    //       <Link className="navbar-brand" to="/">
    //         AIPNEWS
    //       </Link>
    //       <button
    //         className="navbar-toggler"
    //         type="button"
    //         data-bs-toggle="collapse"
    //         data-bs-target="/navbarSupportedContent"
    //         aria-controls="navbarSupportedContent"
    //         aria-expanded="false"
    //         aria-label="Toggle navigation"
    //       >
    //         <span className="navbar-toggler-icon"></span>
    //       </button>
    //       <div className="collapse navbar-collapse" id="navbarSupportedContent">
    //         <ul className="navbar-nav me-auto mb-2 mb-lg-0">
    //           <li className="nav-item">
    //             <Link
    //               className="nav-link active"
    //               aria-current="page"
    //               to="/"
    //             >
    //               Home
    //             </Link>
    //           </li>
    //           <li className="nav-item">
    //             <Link className="nav-link" to="/business">
    //               Business
    //             </Link>
    //           </li>
    //           <li className="nav-item">
    //             <Link className="nav-link" to="/entertainment">
    //               Entertainment
    //             </Link>
    //           </li>
    //           <li className="nav-item">
    //             <Link className="nav-link" to="/general">
    //               General
    //             </Link>
    //           </li>

    //           <li className="nav-item">
    //             <Link className="nav-link" to="/science">
    //               Science
    //             </Link>
    //           </li>

    //           <li className="nav-item">
    //             <Link className="nav-link" to="/sports">
    //               Sports
    //             </Link>
    //           </li>

    //           <li className="nav-item">
    //             <Link className="nav-link" to="/technology">
    //               Technology
    //             </Link>
    //           </li>
    //         </ul>
    //       </div>
    //     </div>
    //   </nav>
    // </div>
    <div>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <NavDropdown title="Select category..." id="basic-nav-dropdown">
                <NavDropdown.Item to="/business">
                  <NavLink to="/business">Business</NavLink>
                </NavDropdown.Item>
                <NavDropdown.Item to="/entertainment">
                  <NavLink to="/entertainment">Entertainment</NavLink>
                </NavDropdown.Item>
                <NavDropdown.Item to="/general">
                  <NavLink to="/general">General</NavLink>
                </NavDropdown.Item>
                <NavDropdown.Item to="/science">
                  <NavLink to="/science">Science</NavLink>
                </NavDropdown.Item>
                <NavDropdown.Item to="/sports">
                  <NavLink to="/sports">Sports</NavLink>
                </NavDropdown.Item>
                <NavDropdown.Item to="/technology">
                  <NavLink to="/technology">Technology</NavLink>
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavbarComponent;

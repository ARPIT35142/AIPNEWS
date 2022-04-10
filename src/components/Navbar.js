import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import logo from "../assets/logo.jpg";

const NavbarComponent = () => {
  const [dropdownTitle, setDropdownTitle] = useState("Select Category...");
  const history = useHistory();
  const [headerClassName, setHeaderClassName] = useState("shadow-sm");

  const handleScroll = (headerClassName) => {
    if (headerClassName === "shadow-sm" && window.pageYOffset >= 5) {
      setHeaderClassName("shadow");
    } else if (headerClassName === "shadow" && window.pageYOffset < 5) {
      setHeaderClassName("shadow-sm");
    }
  };

  React.useEffect(() => {
    window.onscroll = () => handleScroll(headerClassName);
  }, [headerClassName]);
  const handleDropDownSelect = (event, data) => {
    setDropdownTitle(data.target.text);
    history.push("/" + data.target.text.toLowerCase());
  };
  const routeToHome = () => {
    setDropdownTitle("General");
    history.push("/");
  };
  return (
    <div>
      <Navbar bg="light" expand="md" className={headerClassName} fixed="top">
        <Container className="d-flex justify-content-between align-items-center">
          <Navbar.Brand>
            <img src={logo} onClick={routeToHome} alt="app logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <NavDropdown
                onSelect={handleDropDownSelect}
                title={dropdownTitle}
                id="basic-nav-dropdown"
              >
                <NavDropdown.Item>Business</NavDropdown.Item>
                <NavDropdown.Item>Entertainment</NavDropdown.Item>
                <NavDropdown.Item>General</NavDropdown.Item>
                <NavDropdown.Item>Science</NavDropdown.Item>
                <NavDropdown.Item>Sports</NavDropdown.Item>
                <NavDropdown.Item>Technology</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavbarComponent;

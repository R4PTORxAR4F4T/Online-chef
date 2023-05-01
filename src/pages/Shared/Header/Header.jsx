import React from "react";
import "./Header.css";
import { Button, Container, Image, Nav, Navbar } from "react-bootstrap";

const Header = () => {
  return (
    <div className="w-75 mx-auto">
      <Navbar bg="dark" variant="dark">
        <Container className="mx-4 justify-content-between">
          <div className="fw-bold text-white fs-2">
            <Image className="header-img" src="/public/headerLogo.png"
            />
            Chef
          </div>
          <Nav className="">
            <Nav.Link className="me-4" href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Blog</Nav.Link>
            <Nav.Link href="#pricing"></Nav.Link>
            <Button className="ms-3" variant="secondary">Login</Button>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;

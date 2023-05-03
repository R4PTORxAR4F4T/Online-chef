import { Navbar, Nav, Container, Image, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Header.css';
import {AuthContext} from '../../../providers/AuthProvider';
import React,{ useEffect, useState, useContext} from 'react';


function Header() {

  const user = useContext(AuthContext);

  return (
    <div className="sticky-top w-75 mx-auto">
      <Navbar bg="dark" variant="dark">
        <Container fluid className="mx-4 justify-content-between">
          <div className="fw-bold text-white fs-2">
            <Image className="header-img" src="/public/headerLogo.png" />
            Chef
          </div>
          <Nav className="">
            <Link className="me-4 text-decoration-none text-light nav-option" to="/">Home</Link>
            <Link className="me-4 text-decoration-none text-light nav-option" to="/blog">Blog</Link>
            <Button className="mx-3" variant="secondary">
              <Link to="/login" className="text-decoration-none text-light">Login</Link>
            </Button>
            <span className='text-light'>{user && <>ase</>}</span>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
}

export default Header;

import { Navbar, Nav, Container, Image, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Header.css';
import {AuthContext} from '../../../providers/AuthProvider';
import React,{ useEffect, useState, useContext} from 'react';
import { FaUserCircle } from "react-icons/fa";
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';


function Header() {

  const renderTooltip = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      Simple tooltip
    </Tooltip>
  );

  const handleLogOut = () => {
    logOut()
        .then()
        .catch(error => console.log(error));
  }

  const { logOut, user } = useContext(AuthContext);

  // console.log();

  return (
    <div className="sticky-top w-75 mx-auto">
      <Navbar bg="dark" variant="dark">
        <Container fluid className="mx-4 justify-content-between">
          <div className="fw-bold text-white fs-2">
            <Image className="header-img" src="/public/headerLogo.png" />
            Chef
          </div>
          <Nav className="d-flex justify-content-center align-items-center">
            <Link className="me-4 text-decoration-none text-light nav-option" to="/">Home</Link>
            <Link className="me-4 text-decoration-none text-light nav-option" to="/blog">Blog</Link>

            {user?
            <>
                <FaUserCircle className='text-white' style={{height:'3rem'}} title={user?.displayName}></FaUserCircle>
            </>:<></>}

            {user ? 
            <>
              <Button onClick={handleLogOut} className="mx-3" variant="secondary">
              Sign Out
              </Button>
            </>
            :
            <>
              <Button className="mx-3" variant="secondary">
              <Link to="/login" className="text-decoration-none text-light">Login</Link>
              </Button>
            </>}
            <span className='text-light'></span>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
}

export default Header;

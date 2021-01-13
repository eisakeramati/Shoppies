import React, { useState } from 'react';
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import MovieIcon from '@material-ui/icons/Movie';

function Header() {
    const [cond, setCond] = useState(false);
    function changeCond() {
    setCond(true);
    }

    function changeBackCond() {
        setCond(false);
    }

    return(
        <div className="nav-custom">
        <Navbar variant="dark">
            <Navbar.Brand className="nav-title" href="#main" onMouseOut={changeBackCond} onMouseOver={changeCond}>
                <span style={{color: cond ? "#505050" : "white"}} className="icon" ><MovieIcon /></span>Shoppies</Navbar.Brand>
            <Nav className="ml-auto">
                <Nav.Link href="#about">About</Nav.Link>
                <Nav.Link href="#contact">Contact us</Nav.Link>
            </Nav>
        </Navbar>
        </div>
    );
}

export default Header;
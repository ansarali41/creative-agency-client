import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../../App';
import { logOutHandler } from '../../Login/LoginManager';
import { Nav, Navbar } from "react-bootstrap";

const NavMenu = () => {
    const [user, setUser] = useContext(UserContext);
    const { email } = user;
    const userLogOut = () => {
        logOutHandler()
            .then(res => {
                setUser(res)
            })
    }
    return (
        <Navbar bg="light-" expand="lg" className="container">
            <Navbar.Brand>
                <Link className="navbar-brand" to="/"><img className="w-25" src="https://i.ibb.co/kXDXMmN/logo.png" alt="" /></Link>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                    <Link className="nav-link font-weight-bold mr-2" to="/">Home</Link>
                    <Link className="nav-link font-weight-bold mr-2" to="/progress">Our Portfolio</Link>
                    <Link className="nav-link font-weight-bold mr-2" to="/progress">Our Team</Link>
                    <Link className="nav-link font-weight-bold mr-2" to="/progress">Contact Us</Link>
                    {email ? <Link to="/"><button type="button" className="btn btn-dark" onClick={userLogOut}>LogOut</button></Link> :
                          <Link to="/login"><button type="button" className="btn btn-dark">Login</button></Link>
                    }
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default NavMenu;
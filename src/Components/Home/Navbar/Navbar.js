import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../images/logos/logo.png'

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light container">
            <Link className="navbar-brand" to="/"><img className="w-25" src={logo} alt=""/></Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <Link className="nav-link mr-5" to="/">Home <span className="sr-only">(current)</span></Link>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link mr-5" href="/">Our Portfolio</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link mr-5" href="/">Our Team</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link mr-5" href="/">Contact Us</a>
                    </li>
                    <li className="nav-item">
                        <Link to="/"><button type="button" className="btn btn-dark">Login</button></Link>
                    </li>                  
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
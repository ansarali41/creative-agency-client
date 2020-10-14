import React from 'react';
import HeaderBottomContents from '../HeaderBottomContents/HeaderBottomContents';
import HeaderMain from '../HeaderMain/HeaderMain';
import Navbar from '../Navbar/Navbar';
import './Header.css'



const Header = () => {
    return (
        <div className="header-container">
            <Navbar></Navbar>
            <HeaderMain></HeaderMain>
            <HeaderBottomContents></HeaderBottomContents>
        </div>
    );
};

export default Header;
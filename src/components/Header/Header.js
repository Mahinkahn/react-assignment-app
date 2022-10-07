import React from 'react';
import logo from '../../Assets/Images/logo.jpg'
import './Header.css'


const Header = () => {
    return (
        <>
            <div className='mt-4'>
                <div className='d-flex align-items-center style-add'>
                    <img src={logo} className='logo-header' alt="" />
                    <h1 className='daily-part'>5 Everyday Activities </h1>
                </div>
                <div>
                    <h3 className='select-part mt-4'>Select Your Todays Part</h3>
                </div>
            </div>
        </>
    );
};

export default Header;
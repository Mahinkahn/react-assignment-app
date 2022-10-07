import React from 'react';
import logo from '../../Assets/Images/logo.jpg'
import './Header.css'


const Header = () => {
    return (
        <>
            <div className='text-center'>
                <div className='d-flex align-items-center justify-content-center' >
                    <img src={logo} className='logo-header' alt="" />
                    <h2 className='daily-part'>Daily Exercise Activities</h2>
                </div>
                <div>
                    <h5 className='select-part'>Select Your Todays Part</h5>
                </div>
            </div>
        </>
    );
};

export default Header;
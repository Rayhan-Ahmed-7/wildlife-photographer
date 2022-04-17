import React from 'react';

const Footer = () => {
    const date = new Date().getFullYear();
    return (
        <footer className='bg-dark'>
            <p className='text-center text-white mt-5 '><small>copyright ©</small>{date}</p>
        </footer>
    );
};

export default Footer;
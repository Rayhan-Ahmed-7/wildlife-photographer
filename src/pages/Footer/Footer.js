import React from 'react';
import { BsFacebook,BsInstagram } from 'react-icons/bs';
import { AiFillLinkedin,AiOutlineMail,AiOutlineWhatsApp } from 'react-icons/ai';

const Footer = () => {
    const date = new Date().getFullYear();
    return (
        <footer className='bg-dark'>
            <div className='container mx-auto row row-cols-lg-3 row-cols-1 justify-content-center pt-3'>
                <div className='text-white'>
                    <h4>Information</h4>
                    <span className='d-block'>About us</span>
                    <span className='d-block'>blogs</span>
                    <span className='d-block'>service</span>
                </div>
                <div className='text-white'>
                    <h4>Our Services</h4>
                    <span className='d-block'>services</span>
                    <span className='d-block'>nature</span>
                    <span className='d-block'>animal portrait</span>
                    <span className='d-block'>underwater</span>
                </div>
                <div className='text-white'>
                    <h4>social Links</h4>
                    <div className='fs-3'>
                        <BsFacebook className='me-2'></BsFacebook>
                        <BsInstagram className='me-2'></BsInstagram>
                        <AiFillLinkedin className='me-2'></AiFillLinkedin>
                    </div>
                    <p className='text-white'><AiOutlineMail></AiOutlineMail><span>rayhan@gmail.com</span></p>
                    <p className='text-white'><AiOutlineWhatsApp></AiOutlineWhatsApp><span>035308537</span></p>
                </div>
            </div>
            <p className='text-center text-white pt-4 pb-4 mb-0 '><small>copyright ©</small>{date} Rayhan Ahmed Wildlife photographer</p>
        </footer>
    );
};

export default Footer;
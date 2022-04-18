import React from 'react';
import profile from '../../images/about/profile.jpg';
const About = () => {
    return (
        <div className='container mx-auto min-vh-100'>
            <div className='d-flex flex-lg-row flex-column align-items-center justify-content-between mt-4'>
            <img className='img-fluid rounded-3' src={profile} alt="" />
            <div className='ps-4'>
                <h1 className='text-uppercase text-gray fw-bold'>Rayhan Ahmed</h1>
                <small className='text-uppercase letter-spacing'>Wildlife photographer</small>
                <h4 className='mt-3 text-uppercase'>My Goal</h4>
                <p className='text-justify'>My next Goal is visiting diffrent countries and their culture and other beautiful places of those countries and try to take some best photos to make my portfolio. My another goal is to get a job as a photographer in for national geographic and this is why i need a good a portfolio. I love to take animal portraits so my next goal is to add some more animal portraits in my portfolio. This year i will work hard to build the best portfolio and try to get the attention of Clients and company.</p>
            </div>
            </div>
        </div>
    );
};

export default About;
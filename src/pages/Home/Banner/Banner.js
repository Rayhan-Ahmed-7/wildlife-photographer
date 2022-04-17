import React from 'react';
import './Banner.css';
const Banner = () => {
    return (
        <div className='banner'>
            <div className='container mx-auto row row-cols-lg-2 row-cols-1 pt-5'>
                <div className='mt-5'>
                <small className='text-white text-uppercase letter-spacing mb-2'>Rayhan Ahmed</small>
                <h2 className='text-white fs-1'>WILD LIFE <br /> PHOTOGRAPHER</h2>
                <p className='text-white py-2 text-justify'>
                    Photography for me is not looking, it's feeling if you can't feel what you're looking at, then you're never going to get others to feel anything when they look at your pictures.
                </p>
                <button className='btn btn-danger'>Checkout</button>
                </div>
                <div></div>
            </div>
        </div>
    );
};

export default Banner;
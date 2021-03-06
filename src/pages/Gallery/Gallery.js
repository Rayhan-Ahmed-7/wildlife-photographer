import React from 'react';
import dear from '../../images/gallery/dear.jpg';
import tiger from '../../images/gallery/tiger.jpg';
import bird2 from '../../images/gallery/bird2.jpg';
import bird from '../../images/gallery/bird.jpg';
import fish from '../../images/gallery/fish.jpg';
import hamster from '../../images/gallery/hamster.jpg';
import './Gallery.css';
const Gallery = () => {
    return (
        <div className='container mx-auto my-5'>
            <h2 className='text-center text-uppercase fs-2 my-4'>My Best Shots</h2>
            <div className='gallery-container row row-cols-lg-3 row-cols-1 justify-content-center'>
                <div className='m-2 p-3 gallery'>
                    <img src={dear} alt="" />
                </div>
                <div className='m-2 p-3 gallery'>
                    <img src={tiger} alt="" />
                </div>
                <div className='m-2 p-3 gallery'>
                    <img src={bird} alt="" />
                </div>
                <div className='m-2 p-3 gallery'>
                    <img src={fish} alt="" />
                </div>
                <div className='m-2 p-3 gallery'>
                    <img src={hamster} alt="" />
                </div>
                <div className='m-2 p-3 gallery'>
                    <img src={bird2} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Gallery;
import React from 'react';
import tiger from '../../../images/service img/tiger.jpg';
import elephants from '../../../images/service img/elephants.jpg';
import nature from '../../../images/service img/nature.jpg';
import birds from '../../../images/service img/birds.jpg';
import underwater from '../../../images/service img/underwater.jpg';
import mountains from '../../../images/service img/mountains.jpg';
import flower from '../../../images/service img/flower.jpg';
const Services = () => {
    return (
        <div>
            <h2 className='text-center mt-4'>My Services</h2>
        <div className='container mx-auto row row-cols-lg-3 row-cols-1'>
            <div className='g-5'>
                <img className='img-fluid rounded-3' src={elephants} alt="" />
                <h3>Animal in their environment</h3>
                <p>Price:$329</p>
                <p></p>
                <button className='btn btn-danger'>Checkout</button>
            </div>
            <div className='g-5'>
                <img className='img-fluid rounded-3' src={tiger} alt="" />
                <h3>Animal Portraits</h3>
                <p>Price:$410</p>
                <p></p>
                <button className='btn btn-danger'>Checkout</button>
            </div>
            <div className='g-5'>
                <img className='img-fluid rounded-3' src={birds} alt="" />
                <h3>Birds</h3>
                <p>Price:$150</p>
                <p></p>
                <button className='btn btn-danger'>Checkout</button>
            </div>
            <div className='g-5'>
                <img className='img-fluid rounded-3' src={nature} alt="" />
                <h3>Nature</h3>
                <p>Price:$200</p>
                <p></p>
                <button className='btn btn-danger'>Checkout</button>
            </div>
            <div className='g-5'>
                <img className='img-fluid rounded-3' src={mountains} alt="" />
                <h3>Mountains</h3>
                <p>Price:$239</p>
                <p></p>
                <button className='btn btn-danger'>Checkout</button>
            </div>
            <div className='g-5'>
                <img className='img-fluid rounded-3' src={underwater} alt="" />
                <h3>Under Water</h3>
                <p>Price:$360</p>
                <p></p>
                <button className='btn btn-danger'>Checkout</button>
            </div>
            <div className='g-5'>
                <img className='img-fluid rounded-3' src={flower} alt="" />
                <h3>Flowers</h3>
                <p>Price:$120</p>
                <p></p>
                <button className='btn btn-danger'>Checkout</button>
            </div>
        </div>
        </div>
    );
};

export default Services;
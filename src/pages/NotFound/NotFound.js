import React from 'react';
import not from '../../images/notfound/404.png';
const NotFound = () => {
    return (
        <div className='container mx-auto d-flex flex-lg-row flex-column align-items-center mt-4'>
            <div>
                <small className='text-uppercase letter-spacing text-gray'>error 404!</small>
                <h2 className='text-uppercase fw-bold text-gray'>The page you looking for is not found.!</h2>
            </div>
            <div>
                <img className='img-fluid' src={not} alt="" />
            </div>
        </div>
    );
};

export default NotFound;
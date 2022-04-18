import React from 'react';
import {BsFillCartCheckFill} from 'react-icons/bs';
const Service = ({service,handleCheckOut}) => {
    const {name,img,id,price,description} = service;
    return (
        <div className=' service p-3 col-lg-4 col-md-6 col-12'>
                <div className='service-img rounded-3'>
                <img className='img-fluid' src={img} alt="" />
                </div>
                <div>
                <h3 className='pt-2'>{name}</h3>
                <p className='text-justify pt-2'>Price:${price}</p>
                <p className='text-justify'>{description}</p>
                <button onClick={handleCheckOut} className='btn btn-danger d-flex align-items-center text-uppercase'>Checkout <BsFillCartCheckFill className='ms-2'></BsFillCartCheckFill></button>
                </div>
            </div>
    );
};

export default Service;
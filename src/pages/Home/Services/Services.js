import React from 'react';
import tiger from '../../../images/service img/tiger.jpg';
import elephants from '../../../images/service img/elephants.jpg';
import nature from '../../../images/service img/nature.jpg';
import birds from '../../../images/service img/birds.jpg';
import underwater from '../../../images/service img/underwater.jpg';
import mountains from '../../../images/service img/mountains.jpg';
import flower from '../../../images/service img/flower.jpg';
import {BsFillCartCheckFill} from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';
import './Services.css';
const Services = () => {
    const navigate = useNavigate();
    const handleCheckOut = ()=>{
        navigate('/checkout');
    }
    return (
        <div className='my-4'>
            <h2 className='text-center mt-4'>My Services</h2>
        <div className='services-container mx-auto row justify-content-center'>
            <div className=' service p-3 col-lg-4 col-md-6 col-12'>
                <div className='service-img rounded-3'>
                <img className='img-fluid' src={elephants} alt="" />
                </div>
                <div>
                <h3 className='pt-2'>Animal in their environment</h3>
                <p className='text-justify pt-2'>Price:$329</p>
                <p className='text-justify'>Photos that capture animal behaviour in the wild. This could be interactions between multiple individuals, or one going about its day and interacting with its environment.</p>
                <button onClick={handleCheckOut} className='btn btn-danger d-flex align-items-center text-uppercase'>Checkout <BsFillCartCheckFill className='ms-2'></BsFillCartCheckFill></button>
                </div>
            </div>
            <div className=' service p-3 col-lg-4 col-md-6 col-12'>
                <div className='service-img rounded-3'>
                <img className='img-fluid' src={tiger} alt="" />
                </div>
                <div>
                <h3 className='pt-2'>Animal Portraits</h3>
                <p className='text-justify pt-2'>Price:$410</p>
                <p className='text-justify'>Focused on beautiful portraits of wildlife, this category is usually more “traditional.” Favoured by photographers who want to showcase an animal with a straight-forward portrait.</p>
                <button onClick={handleCheckOut} className='btn btn-danger d-flex align-items-center text-uppercase'>Checkout <BsFillCartCheckFill className='ms-2'></BsFillCartCheckFill></button>
                </div>
            </div>
            <div className=' service p-3 col-lg-4 col-md-6 col-12'>
                <div className='service-img rounded-3'>
                <img className='img-fluid' src={birds} alt="" />
                </div>
                <div>
                <h3 className='pt-2'>Birds</h3>
                <p className='text-justify pt-2'>Price:$150</p>
                <p className='text-justify'>Focused on beautiful portraits or pack of birds in wildlife, this category is usually more Favoured by photographers</p>
                <button onClick={handleCheckOut} className='btn btn-danger d-flex align-items-center text-uppercase'>Checkout <BsFillCartCheckFill className='ms-2'></BsFillCartCheckFill></button>
                </div>
            </div>
            <div className=' service p-3 col-lg-4 col-md-6 col-12'>
                <div className='service-img rounded-3'>
                <img className='img-fluid' src={nature} alt="" />
                </div>
                <div>
                <h3 className='pt-2'>Nature</h3>
                <p className='text-justify pt-2'>Price:$200</p>
                <p className='text-justify'>Conveying the essence of a plant and other natural element or portraying its importance or role in its environment or its means of survival</p>
                <button onClick={handleCheckOut} className='btn btn-danger d-flex align-items-center text-uppercase'>Checkout <BsFillCartCheckFill className='ms-2'></BsFillCartCheckFill></button>
                </div>
            </div>
            <div className=' service p-3 col-lg-4 col-md-6 col-12'>
                <div className='service-img rounded-3'>
                <img className='img-fluid' src={mountains} alt="" />
                </div>
                <div>
                <h3 className='pt-2'>Mountains</h3>
                <p className='text-justify pt-2'>Price:$239</p>
                <p className='text-justify'>Photos that show off the beauty of our natural world through Mountains.</p>
                <button onClick={handleCheckOut} className='btn btn-danger d-flex align-items-center text-uppercase'>Checkout <BsFillCartCheckFill className='ms-2'></BsFillCartCheckFill></button>
                </div>
            </div>
            <div className=' service p-3 col-lg-4 col-md-6 col-12'>
                <div className='service-img rounded-3'>
                <img className='img-fluid' src={underwater} alt="" />
                </div>
                <div>
                <h3 className='pt-2'>Under Water</h3>
                <p className='text-justify pt-2'>Price:$360</p>
                <p className='text-justify'>This category focuses on the underwater world. This could be marine animals, as well as landscapes and macro beneath the waves.</p>
                <button onClick={handleCheckOut} className='btn btn-danger d-flex align-items-center text-uppercase'>Checkout <BsFillCartCheckFill className='ms-2'></BsFillCartCheckFill></button>
                </div>
            </div>
            <div className=' service p-3 col-lg-4 col-md-6 col-12'>
                <div className='service-img rounded-3'>
                <img className='img-fluid' src={flower} alt="" />
                </div>
                <div>
                <h3 className='pt-2'>Flowers</h3>
                <p className='text-justify pt-2'>Price:$120</p>
                <p className='text-justify'>Taking beautiful portraits of flowers this very favorite among photographer</p>
                <button onClick={handleCheckOut} className='btn btn-danger d-flex align-items-center text-uppercase'>Checkout <BsFillCartCheckFill className='ms-2'></BsFillCartCheckFill></button>
                </div>
            </div>
        </div>
        </div>
    );
};

export default Services;
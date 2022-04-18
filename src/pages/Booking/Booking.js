import React from 'react';

const Booking = () => {
    const handleBooking = (e)=>{
        e.preventDefault();
        
    }
    return (
        <div className='container mx-auto pt-4 min-vh-100'>
            <h2 className='text-center mt-5 fs-2'>Wellcome to the Check Out page..</h2>
            <form onSubmit={handleBooking} className='d-flex justify-content-center' action="">
                <div className="form-group">
                <input className='d-block mb-3 rounded-3' type="text" name="" placeholder='enter your name' required/>
                <input className='d-block mb-3 rounded-3' type="email" name="" placeholder='enter your email' required/>
                <input className='d-block mb-3 rounded-3' type="text" name="" placeholder='enter your address' required/>
                <input className='d-block mb-3 rounded-3' type="text" name="" placeholder='enter your phoneNumber' required/>
                <input className='btn btn-danger' type="submit" value='Booking'/>
                </div>
            </form>
        </div>
    );
};

export default Booking;
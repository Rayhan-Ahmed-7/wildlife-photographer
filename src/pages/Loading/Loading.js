import React from 'react';
import { Spinner } from 'react-bootstrap';

const Loading = () => {
    return (
        <div className='w-100 d-flex justify-content-center'>
            <Spinner animation="border" variant="warning" />
        </div>
    );
};

export default Loading;
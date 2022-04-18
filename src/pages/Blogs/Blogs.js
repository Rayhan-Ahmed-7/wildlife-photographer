import React from 'react';

const Blogs = () => {
    return (
        <div className='container mx-auto row row-cols-lg-2 row-cols-1 pt-4'>
            <div>
                <h2 className='text-dark fs-4'>1. what is the Difference between authorization and authentication .?</h2>
                <p className='row row-cols-lg-2 row-cols-1'>
                    <div>
                    <p className='fs-5 d-block text-center'>Authentication</p>
                    <p className='text-justify mb-2 fw-normal'>1. Determines whether users are valid or not or who they claim to be in short identifying the user.</p>
                    <p className='text-justify mb-2 fw-normal'>2. Usually done before authorization.</p>
                    <p className='text-justify mb-2 fw-normal'>3. You may have seen Employees in a company are required to authenticate through the network before accessing their company email.</p>
                    </div>
                    <div>
                    <p className='fs-5 d-block text-center'>Authorization</p>
                    <p className='text-justify mb-2 fw-normal'>1. Determines what resources users can access or not.</p>
                    <p className='text-justify mb-2 fw-normal'>2. Usually done after successful authentication.</p>
                    <p className='text-justify mb-2 fw-normal'>3. You may have seen After an employee successfully authenticates, the system determines what information the employees are allowed to access.</p>
                    </div>
                </p>
            </div>
            <div>
                <h2 className='text-dark fs-4'>2. Why are you using firebase.? What other options do you have to implement authentication .?</h2>
                <p className='text-justify'>1.Firebase Authentication makes it easier to get your users signed-in without having to understand the complexities behind implementing our own authentication system.</p>
                <p className='text-justify'>2.Other option: AWS Amplify is also a open-source backend as a service in cloud computing since it’s created by Amazon. This comes with a full toolkit that can be expected to handle multiple backend services in a more manageable and simpler way.</p>
                <p className='text-justify'>2.1 Back4App is also one of the easiest solutions that are available on the market that is designed for the creation of web and mobile apps. It also allows you to host and manage your applications with ease.</p>
            </div>
            <div>
                <h2 className='text-dark fs-4'>3. What other services does firebase provide other than authentication .?</h2>
                <p className='text-justify'>Firebase provide a lot of services other than authentication like Hosting, cloud firestore, cloud storage, Google Analytics, predictions, cloud messaging etc</p>
            </div>
        </div>
    );
};

export default Blogs;
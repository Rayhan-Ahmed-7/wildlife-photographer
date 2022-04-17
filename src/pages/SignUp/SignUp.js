import React, { useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import SocialLogin from '../SocialLogin/SocialLogin';
import { Button, Form } from 'react-bootstrap';
const SignUp = () => {
    const navigate = useNavigate();
    const nameRef = useRef('');
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth,{sendEmailVerification:true});
      const [updateProfile, updating, UpdateError] = useUpdateProfile(auth);
    const handleSignUp = async e =>{
        e.preventDefault()
        const name = nameRef.current.value;
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        await createUserWithEmailAndPassword(email,password);
        await updateProfile({displayName:name});
        navigate('/');
    }
    return (
        <div className='container w-50 mx-auto mt-5'>
            <h2 className='text-center text-primary'>Sign Up</h2>
            <Form onSubmit={handleSignUp}>
                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label>Name</Form.Label>
                    <Form.Control ref={nameRef} type="text" placeholder="Enter your name" required/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control ref={emailRef} type="email" placeholder="Enter email" required/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control ref={passwordRef} type="password" placeholder="Password" required/>
                </Form.Group>
                <p className='text-danger'>{error?.message}</p>
                <Button className='d-block w-50 mx-auto btn btn-primary' variant="primary" type="submit">
                    Login
                </Button>
            </Form>
            <p className='text-center mt-3'>Already Signed up.?<Link to='/login'>Login</Link></p>
            <SocialLogin></SocialLogin>
        </div>
    );
};

export default SignUp;
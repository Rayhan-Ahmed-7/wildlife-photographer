import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import auth from '../../firebase.init';
import Loading from '../Loading/Loading';
import SocialLogin from '../SocialLogin/SocialLogin';
import './Login.css';
const SignUp = () => {
    const navigate = useNavigate();
    const location = useLocation();
    // redirect location to check out page
    const from = location.state?.from?.pathname || '/';
    //sign in with email and password
    const [signInWithEmailAndPassword,user,loading,error] = useSignInWithEmailAndPassword(auth);
    const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);
    const emailRef = useRef('');
    const passwordRef = useRef('');
    //handling form submit
    const handleSubmit = (e)=>{
        e.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        console.log(email,password);
        signInWithEmailAndPassword(email,password);
    }
    //when user is true navigate user to checkout page
    if(user){
        navigate(from,{replace:true});
    }
    
    const resetPassword = async()=>{
        const email = emailRef.current.value;
        if(email){
            await sendPasswordResetEmail(email);
            toast("A password reset email sent to your email !");
        }else{
            toast('please enter your email address first');
        }
    }
    return (
        <div className='container w-50 login-form mx-auto mt-5'>
            <h2 className='text-center text-primary'>Login</h2>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control ref={emailRef} type="email" placeholder="Enter email" required/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control ref={passwordRef} type="password" placeholder="Password" required/>
                </Form.Group>
                {loading?<Loading></Loading>:''}
                <p className='text-danger'>{error?.message}</p>
                <Button className='d-block w-50 mx-auto btn btn-primary' variant="primary" type="submit">
                    Login
                </Button>
            </Form>
            <p className='text-center mt-3'>New to Wild life?<Link className='text-decoration-none ms-2' to='/signup'>Please Sign Up</Link></p>
            <p className='text-center'>forget password.?<span className='text-primary cursor-pointer ms-2' onClick={resetPassword}>Reset password</span></p>
            <SocialLogin></SocialLogin>
            <ToastContainer />
        </div>
    )
};

export default SignUp;
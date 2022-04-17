import React from 'react';
import { useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import google from '../../images/social icons/google-logo.png';
import github from '../../images/social icons/github-logo.png';
import auth from '../../firebase.init';
const SocialLogin = () => {
    const [signInWithGoogle, googleUser, gloading, gerror] = useSignInWithGoogle(auth);
    const [signInWithGithub, githubUser, gitoading, giterror] = useSignInWithGithub(auth);
    const navigate = useNavigate();
    let errorElement;
    if(gerror || giterror){
        errorElement = <div>
                <p className='text-danger'>Error: {gerror?.message}{giterror?.message}</p>
            </div>
    }
    if(googleUser || githubUser){
        navigate('/home');
    }
    return (
        <div>
            <div className='d-flex align-items-center'>
                <div style={{ height: '1px' }} className='bg-primary w-50'></div>
                <p className='mt-2 px-2'>or</p>
                <div style={{ height: '1px' }} className='bg-primary w-50'></div>
            </div>
            {errorElement}
            <div>
                <button onClick={()=>signInWithGoogle()} className='btn btn-success w-50 d-block mx-auto mt-2'>
                    <img width='30px' src={google} alt="" />
                    <span className='px-2'>Google Sign In</span> 
                </button>
                <button onClick={()=>signInWithGithub()} className='btn btn-success w-50 d-block mx-auto mt-2'>
                    <img width='30px' src={github} alt="" />
                    <span className='px-2'>Github Sign In</span>
                </button>
            </div>
        </div>
    )
};

export default SocialLogin;
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuthState, useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import SocialLogin from '../SocialLogin/SocialLogin';
const SignUp = () => {
    const navigate = useNavigate();
    const [agree,setAgree] = useState(false);
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth,{sendEmailVerification:true});
      const [updateProfile, updating, UpdateError] = useUpdateProfile(auth);
    const handleRegister = async e =>{
        e.preventDefault()
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        //const agree = e.target.terms.checked;
        await createUserWithEmailAndPassword(email,password);
        await updateProfile({displayName:name});
        // if(agree){
        //     createUserWithEmailAndPassword(email,password)
        // }
        navigate('/home');
    }
    return (
        <div className='register-form'>
            <h2 className='text-center'>Register</h2>
            <form action="" onSubmit={handleRegister}>
                <input type="text" name="name"  placeholder='Your Name' required/>
                <br />
                <input type="email" name="email"  placeholder='Email Address' required/>
                <br />
                <input type="password" name="password"  placeholder='password' required/>
                <input onClick={()=>setAgree(!agree)} type="checkbox" name="terms" id='terms'/>
                <label className={`ps-2 ${agree? 'text-primary':'text-danger'}`} htmlFor="terms">Accept terms and Conditions</label>
                <input disabled={!agree} className='mt-3 w-50 mx-auto btn btn-primary' type="submit" value="Register" />
            </form>
            <p>Already Registerd.?<Link to='/login'>Login</Link></p>
            <SocialLogin></SocialLogin>
        </div>
    );
};

export default SignUp;
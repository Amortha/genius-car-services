import React, { useState } from 'react';
import {Link, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import './Register.css'
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import SocialLogin from '../SocialLogin/SocialLogin';
import { async } from '@firebase/util';
import Loading from '../../shared/Loading/Loading';
const Register = () => {
    const [agree, setAgree] = useState(false)

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });

    const [updateProfile, updating, updateError] = useUpdateProfile(auth);

    const navigate = useNavigate();
    const navigateLogin = () => {
        navigate('/login');
    }

    if (loading || updating){
        return<Loading></Loading>
    }

    if (user) {
      console.log('user',user);
    }

    const handleRegister = async(event) => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
        //    const agree = event.target.terms.checked;
        
         await createUserWithEmailAndPassword(email, password);
         await updateProfile({ displayName:name });
         console.log('Updated profile');
         navigate('/home');  
        }
    return (
        <div className='register-from'>
            <h2 style={{ textAlign: 'center' }}>plase Register</h2>
            <form onSubmit={handleRegister}>
                <input type="text" name='name' id='' placeholder='your name' />
                <br></br>
                <input type="email" name='email' id='' placeholder='your Email' required />
                <br></br>

                <input type="password" name='password' id="" placeholder='password' required />
                <input onClick={() => setAgree(!agree)} type="checkbox" name="terms" id='terms' />
                {/* <label className={agree ? 'ps-2 ': '  ps -2 text-danger'} htmlFor='terms'>Accept Genius car Terms and conditions</label> */}
                <label className={`ps-2 ${agree ? '' : "text-danger"}`} htmlFor='terms'>Accept Genius car Terms and conditions</label>
                <input
                    disabled={!agree}
                    className='w-50 mt-2 mx-auto btn btn-primary'
                    type="submit"
                    value="Register" />
            </form>
            <p>Already have an account?  <Link to='/login' className='pe auto text-decoration-none text-primary' onClick={navigateLogin}>please login</Link></p>
            <SocialLogin></SocialLogin>
        </div>
    );
};

export default Register;
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import './Register.css'
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
const Register = () => {
 const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth);
    const navigate = useNavigate();
    const navigateLogin =()=>{
       navigate('/login') ;
    }
    if(user){
        navigate('/home');
    }

    const handleRegister = event =>{
        event.preventDefault();
       const name= event.target.name.value;
       const email = event.target.email.value;
       const password = event.target.password.value;
       createUserWithEmailAndPassword(email,password)
    }
    return (
        <div className='register-from'>
        <h2 style={{textAlign:'center'}}>plase Register</h2>  
        <form onSubmit={handleRegister}>
        <input type="text"name='name'id='' placeholder='your name'/>
        <br></br>
        <input type="email"name='email'id='' placeholder='your Email' required/>
        <br></br>
        
        <input type="password"name='password' id= "" placeholder='password' required/>
        <input type="submit" value="Register"/>
        </form>
        <p>Already have an account?  <Link to='/login'className='pe auto text-decoration-none text-danger' onClick={navigateLogin}>please login</Link></p>
        </div>
    );
};

export default Register;
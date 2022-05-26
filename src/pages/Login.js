import React, { useState } from 'react'
import '../assets/css/Register.css'
import login from '../assets/images/login.jpg'
import { Link, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
// import { selectUser } from '../../../feature/UserSlice';

function Login() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    let [emailError, setEmailError] = useState("");
    let [passwordError, setPasswordError] = useState("");

    const emailField = document.getElementById('email');
    const passwordField = document.getElementById('password');

    const validate = () => {

        let emailError = "";
        let passwordError = "";

        const emailRegex = /^([a-zA-Z0-9_\.\-]+)@([a-zA-Z]+)\.([a-zA-Z]{2,5})$/;
        const passwordRegex = /^[A-Za-z0-9]{7,15}$/;

        if(email === "") {
            emailError = "Email field is required";
            setEmailError(emailError);
            emailField.classList.add('is-invalid')
        }
        else if(!emailRegex.test(email)) {
            emailError = "Please provide a valid Email";
            setEmailError(emailError);
            emailField.classList.add('is-invalid');
        }
        else {
            emailField.classList.remove('is-invalid')
        }

        if(password === "") {
            passwordError = "Password field is required";
            setPasswordError(emailError);
            passwordField.classList.add('is-invalid')
        }
        else if(!passwordRegex.test(password)) {
            passwordError = "Please provide a valid Password";
            setPasswordError(passwordError);
            passwordField.classList.add('is-invalid');
        }
        else {
            passwordField.classList.remove('is-invalid')
        }

        if(emailError || passwordError) {
            return false;
        }

        return true
    }

    // const user = useSelector(selectUser);

    // const authentication = () => {

    //     const button = document.getElementById('login-button');

    //     if(!(email === user.email && password === user.password)) {
    //         console.log('autherntication failed')
    //         emailField.classList.add('is-invalid')
    //         passwordField.classList.add('is-invalid')
    //         button.classList.add('is-invalid')

    //         return false
    //     }
    //     else{
    //         passwordField.classList.remove('is-invalid')
    //         emailField.classList.remove('is-invalid')
    //         button.classList.remove('is-invalid')
    //     }

    //     return true
    // }

    const navigate = useNavigate();

    const handleSubmit = e => {
        e.preventDefault();

        console.log('in handlesubmit')

        const isValid = validate();
        // const auth = authentication();

        if(isValid ) {   //old code: if(isValid && auth)
            
            navigate('/home');
            
        }
    }

  return (
    <>
      <main className='page-auth'>
            <div className='container'>
                <div className='row'>
                    <div className='col-lg-10 offset-lg-1'>
                        <section className='auth-wrapper'>
                            <div className='row'>
                                <div className='col-md-6 mb-4 mb-md-0'>
                                    <h2 className='auth-section-title'>Log In</h2>
                                    <p className='auth-section-subtitle'>Sign in to your account to continue.</p>
                                    <form action='#' method='POST' onSubmit={handleSubmit}>
                                        <div className='form-group'>
                                            <label htmlFor='email'>Email<sup>*</sup></label>
                                            <input type='email' className='form-control' id='email' name='email' placeholder='Email' value={email} onChange={e => setEmail(e.target.value)}/>
                                            <strong className='invalid-feedback' >{emailError}</strong>
                                        </div>
                                        <div className='form-group'>
                                            <label htmlFor='password'>Password<sup>*</sup></label>
                                            <input type='password' className='form-control' id='password' name='password' placeholder='Password' value={password} onChange={e => setPassword(e.target.value)}/>
                                            <strong className='invalid-feedback' >{passwordError}</strong>
                                        </div>
                                        {/* <div className="form-actions-wrapper d-flex flex-wrap align-items-center justify-content-between">
                                            <div className="form-check">
                                                <input className="form-check-input" type="checkbox" value="" id="keepLogin" />
                                                <label className="form-check-label" htmlFor="keepLogin">
                                                    keep me login
                                                </label>
                                            </div>
                                        </div> */}
                                        <button className="btn btn-primary btn-auth-submit" id='login-button' type="submit">Submit</button>
                                        <h4 className='invalid-feedback' >Login failed Check Email Id or Password</h4>
                                    </form>
                                    <p className="mb-0">
                                        <Link to='/' className="text-dark font-weight-bold">New User? Sign Up</Link>
                                    </p>
                                </div>
                                <div className="col-md-6 d-flex align-items-center">
                                    <img src={login} alt="login" className="img-fluid" />
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </main>
    </>
  )
}

export default Login


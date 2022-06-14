import React, { useState, useEffect } from 'react'
import '../assets/css/Register.css'
import login from '../assets/images/login.jpg'
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'
import { loadUsers } from '../Action/action'
import CryptoJS from 'crypto-js'
import { API_KEY } from '../Api/api'
import ValidateLogin from '../utiles/ValidateLogin';
// import { selectUser } from '../../../feature/UserSlice';

function Login() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    let [emailError, setEmailError] = useState("");
    let [passwordError, setPasswordError] = useState("");

    const emailField = document.getElementById('email');
    const passwordField = document.getElementById('password');

    let currentDate = new Date();
    let currentTime = currentDate.getHours();

    console.log( "Time is", currentTime)

    const validate = () => {

        const error = ValidateLogin(email, password)

        let emailError = error.emailError;
        let passwordError = error.passwordError ;

        if(emailError) {
            setEmailError(emailError);
            emailField.classList.add('is-invalid')
        } else {
            emailField.classList.remove('is-invalid')
        }

        if (passwordError) {
            setPasswordError(passwordError)
            passwordField.classList.add('is-invalid')
        } else {
            passwordField.classList.remove('is-invalid')
        }

        if(emailError || passwordError) {
            return false;
        }

        return true
    }

    const navigate = useNavigate();

    let dispatch = useDispatch();
    const { users } = useSelector(state => state.data)

    useEffect(() => {
        dispatch(loadUsers())
    }, [])

    const createToken = () => {

        let data = {
            email: email,
            password: password,
            currentTime: currentTime
        }
        var ciphertext = CryptoJS.AES.encrypt(JSON.stringify(data), API_KEY).toString();

        return ciphertext

    }

    const authentication = () => {
        console.log("user", users)

        let profile = users.find((index) => index.email === email && index.password === password)
        const button = document.getElementById('login-button');

        console.log("pro",profile)

        if(profile !== undefined) {
            localStorage.setItem("id", profile.id)
            let token = createToken()
            localStorage.setItem("token", token)
            console.log("USER FOUND")
            passwordField.classList.remove('is-invalid')
            emailField.classList.remove('is-invalid')
            button.classList.remove('is-invalid')
            return true
        }
        else {
            console.log("USER NOT FOUND")
            emailField.classList.add('is-invalid')
            passwordField.classList.add('is-invalid')
            button.classList.add('is-invalid')
            return false
        }
    }

    const handleSubmit = e => {
        e.preventDefault();

        console.log('in handlesubmit')

        const isValid = validate();
        const auth = authentication();

        if(isValid && auth ) {   //old code: if(isValid && auth)
            
            navigate('/');
            
        }
    }

  return (
    <>
      <main className='page-auth'>
            <div className='container'>
                <div className='row'>
                    <div className='col-lg-10 offset-lg-1'>
                        <section className='auth-wrapper'>
                            <Link to='/' className='btn btn-primary mb-5'><i className="fa fa-arrow-left" aria-hidden="true"></i> Go Home</Link>
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
                                        <Link to='/register' className="text-dark font-weight-bold">New User? Sign Up</Link>
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


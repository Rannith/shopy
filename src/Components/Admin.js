import React, { useEffect } from 'react';
import '../assets/css/Register.css';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';
import CryptoJS from 'crypto-js';
import { API_KEY } from '../Api/api'
import * as API from '../Api/api'
import ValidateLogin from '../utiles/ValidateLogin';

function Admin() {

    const [state, setState] = useState({
        email: "",
        password: ""
    });

    const { email, password } = state;
    const [user, setUser] = useState("");

    const handleInputChange = (e) => {
        let { name, value } = e.target;
        setState({ ...state, [name]: value });
    };

    let [emailError, setEmailError] = useState("");
    let [passwordError, setPasswordError] = useState("");

    const emailField = document.getElementById('email');
    const passwordField = document.getElementById('password');

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

    const authentication = () => {

        let profile = user.find((index) => index.email === email && index.password === password)
        const button = document.getElementById('login-button');

        if (profile !== undefined) {
            console.log("ADMIN FOUND")
            const token = createToken();
            localStorage.setItem("token", token)
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

    useEffect(() => {
        getAdmin()
    }, [])

    const getAdmin = () => {
        axios.get(API.API_ADMIN).then((res) => {
            const allUser = res.data;
            setUser(allUser)
        })
    }

    const createToken = () => {

        let data = {
            email: email,
            password: password
        }
        var ciphertext = CryptoJS.AES.encrypt(JSON.stringify(data), API_KEY).toString();

        return ciphertext

    }

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        const isValid = validate();
        const auth = authentication();

        if(isValid && auth ) {   
            navigate('/adminpanel');
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
                                        <h2 className='auth-section-title'>Admin's Log In</h2>
                                        <p className='auth-section-subtitle'>Sign in to your account to continue.</p>
                                        <form action='#' method='POST' onSubmit={handleSubmit} >
                                            <div className='form-group'>
                                                <label htmlFor='email'>Email<sup>*</sup></label>
                                                <input type='email' className='form-control' id='email' name='email' placeholder='Email' value={email} onChange={handleInputChange} />
                                                <strong className='invalid-feedback' >{emailError}</strong>
                                            </div>
                                            <div className='form-group'>
                                                <label htmlFor='password'>Password<sup>*</sup></label>
                                                <input type='password' className='form-control' id='password' name='password' placeholder='Password' value={password} onChange={handleInputChange} />
                                                <strong className='invalid-feedback' >{passwordError}</strong>
                                            </div>
                                            <button className="btn btn-primary btn-auth-submit" id='login-button' type="submit">Submit</button>
                                            <h4 className='invalid-feedback' >Login failed Check Email Id or Password</h4>
                                        </form>
                                    </div>
                                    <div className="col-md-6 d-flex align-items-center">
                                        <img src="" alt="Admin-login" className="img-fluid" />
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

export default Admin

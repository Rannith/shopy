import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import '../assets/css/Register.css'
import register from '../assets/images/register.jpg'
// import { login, selectUser } from '../../../feature/UserSlice';
import { Link,  useNavigate } from 'react-router-dom';
// import api from '../api/user'
import { addUser } from '../redux/action';
// import { signUp } from '../redux/authAction';

function Register() {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [phone, setPhone] = useState("");

    // const [state, setState] = useState({
    //     name: "",
    //     email: "",
    //     phone: "",
    //     password: ""
    // })

    // const {name, email, phone, password} = state;

    let [nameError, setNameError] = useState("");
    let [emailError, setEmailError] = useState("");
    let [passwordError, setPasswordError] = useState("");
    let [phoneError, setPhoneError] = useState("");

    const validate = () => {
        console.log("in validate")

        let nameError = "";
        let emailError = "";
        let phoneError = "";
        let passwordError = "";

        const nameRegex = /^[a-zA-Z]{2,15}$/;
        const emailRegex = /^([a-zA-Z0-9_\.\-]+)@([a-zA-Z]+)\.([a-zA-Z]{2,5})$/;
        const phoneRegex = /^[6-9]{1}[0-9]{9}$/;
        const passwordRegex = /^[A-Za-z0-9]{7,15}$/;

        const nameField = document.getElementById('name');
        const emailField = document.getElementById('email');
        const phoneField = document.getElementById('phone');
        const passwordField = document.getElementById('password');
 
        if(name === "") {
            nameError = "Name field is required";
            setNameError(nameError);
            nameField.classList.add('is-invalid')
        }
        else if(!nameRegex.test(name)) {
            nameError = "Please provide a valid name";
            setNameError(nameError);
            nameField.classList.add('is-invalid');
        }
        else {
            nameField.classList.remove('is-invalid')
        }

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

        if(phone === "") {
            phoneError = "Phone Number field is required";
            setPhoneError(phoneError);
            phoneField.classList.add('is-invalid')
        }
        else if(!phoneRegex.test(phone)) {
            phoneError = "Please provide a valid Phone Number";
            setPhoneError(phoneError);
            phoneField.classList.add('is-invalid');
        }
        else {
            phoneField.classList.remove('is-invalid')
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

        if(nameError || emailError || phoneError || passwordError) {
            return false;
        }

        return true

    }

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const state = useSelector(state => state)
    console.log("state:", state)

    const userData = {
        name:name,
        email:email,
        phone:phone,
        password:password
    }

    const handleSubmit = e => {
        e.preventDefault();

        const isValid = validate();

        if(isValid) {

            // dispatch(login({
            //     name:name,
            //     email:email,
            //     phone:phone,
            //     password:password,
            //     loggedIn:true
            // }))

            dispatch(addUser(userData))
            // dispatch(signUp(userData));

            navigate('/login');
            
        }

    }

  return (
    <>
      <main className='page-auth register'>
            <div className='container'>
                <div className='row'>
                    <div className='col-lg-10 offset-lg-1'>
                        <section className='auth-wrapper'>
                        <Link to='/' className='btn btn-primary mb-5'><i className="fa fa-arrow-left" aria-hidden="true"></i> Go Home</Link>
                            <div className='row'>
                                <div className='col-md-6 mb-4 mb-md-0'>
                                    <h2 className='auth-section-title'>Create account</h2>
                                    <p className='auth-section-subtitle'>Hey! you are going to be part of us</p>
                                    <form action='#' method='POST' onSubmit={handleSubmit} >
                                    <div className='form-group'>
                                        <label htmlFor='name'>Name<sup>*</sup></label>
                                        <input type='text' className='form-control' id='name' name='name' placeholder='Name'  value={name} onChange={e => setName(e.target.value)}/>
                                        <strong className='invalid-feedback' >{nameError}</strong>
                                    </div>
                                    <div className='form-group'>
                                        <label htmlFor='email'>Email<sup>*</sup></label>
                                        <input type='email' className='form-control' id='email' name='email' placeholder='Email' value={email} onChange={e => setEmail(e.target.value)}/>
                                        <strong className='invalid-feedback' >{emailError}</strong>
                                    </div>
                                    <div className='form-group'>
                                        <label htmlFor='phone'>Phone No<sup>*</sup></label>
                                        <input type='tel' className='form-control' id='phone' name='phone' placeholder='Phone No'  value={phone} onChange={e => setPhone(e.target.value)}/>
                                        <strong className='invalid-feedback' >{phoneError}</strong>
                                    </div>
                                    <div className='form-group'>
                                        <label htmlFor='password'>Password<sup>*</sup></label>
                                        <input type='password' className='form-control' id='password' name='password' placeholder='Password'  value={password} onChange={e => setPassword(e.target.value)}/>
                                        <strong className='invalid-feedback' >{passwordError}</strong>
                                    </div>
                                    <button className='btn btn-primary btn-auth-submit' type='submit'>Create account</button>
                                </form>
                                <p className='mb-0'>
                                    <Link to='/login' className='text-dark font-weight-bold'>Already have a account?  <strong>Sign in</strong></Link>
                                </p>
                                </div>
                                <div className="col-md-6 d-flex align-items-center">
                                    <img src={register} alt="Register" className="img-fluid"/>
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

export default Register

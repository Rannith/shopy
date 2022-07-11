import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import '../../assets/css/Register.css'
import register from '../../assets/images/register.jpg'
import { Link, useNavigate } from 'react-router-dom';
import { registerUser } from '../../action/action';
import ValidateRegister from '../../container/utils/ValidateRegister';

function Register() {

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [phone, setPhone] = useState("");
    const [role, setRole] = useState("");

    let [firstNameError, setFirstNameError] = useState("");
    let [lastNameError, setLastNameError] = useState("");
    let [emailError, setEmailError] = useState("");
    let [passwordError, setPasswordError] = useState("");
    let [phoneError, setPhoneError] = useState("");
    let [roleError, setRoleError] = useState("");

    const validate = () => {
        console.log("in validate")

        const error = ValidateRegister(firstName, lastName, email, password, phone, role)

        let firstNameError = error.firstNameError;
        let lastNameError = error.lastNameError;
        let emailError = error.emailError;
        let phoneError = error.phoneError;
        let passwordError = error.passwordError;
        let roleError = error.roleError;

        const firstNameField = document.getElementById('firstName');
        const lastNameField = document.getElementById('lastName');
        const emailField = document.getElementById('email');
        const phoneField = document.getElementById('phone');
        const passwordField = document.getElementById('password');
        const roleField = document.getElementById('role')

        if (firstNameError) {
            setFirstNameError(firstNameError);
            firstNameField.classList.add('is-invalid')
        } else {
            firstNameField.classList.remove('is-invalid')
        }

        if (lastNameError) {
            setLastNameError(lastNameError);
            lastNameField.classList.add('is-invalid')
        } else {
            lastNameField.classList.remove('is-invalid')
        }

        if (emailError) {
            setEmailError(emailError);
            emailField.classList.add('is-invalid')
        } else {
            emailField.classList.remove('is-invalid')
        }

        if (phoneError) {
            setPhoneError(phoneError)
            phoneField.classList.add('is-invalid')
        } else {
            phoneField.classList.remove('is-invalid')
        }

        if (passwordError) {
            setPasswordError(passwordError)
            passwordField.classList.add('is-invalid')
        } else {
            passwordField.classList.remove('is-invalid')
        }

        if(roleError) {
            console.log("ROLE ERROR : ", roleError)
            setRoleError(roleError)
            roleField.classList.add('is-invalid')
        } else {
            roleField.classList.remove('is-invalid')
        }

        if (firstNameError || lastNameError || emailError || phoneError || passwordError) {
            return false;
        }

        return true

    }

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const state = useSelector(state => state)
    console.log("state:", state)

    const userData = {
        firstName:firstName,
        lastName:lastName,
        email:email,
        phone:phone,
        password:password,
        role:role
    }

    const handleSubmit = e => {
        e.preventDefault();

        const isValid = validate();

        if (isValid) {
            dispatch(registerUser(userData))
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
                                                <label htmlFor='name'>First Name<sup>*</sup></label>
                                                <input type='text' className='form-control' id='firstName' name='firstName' placeholder='First Name' value={firstName} onChange={e => setFirstName(e.target.value)} />
                                                <strong className='invalid-feedback' >{firstNameError}</strong>
                                            </div>
                                            <div className='form-group'>
                                                <label htmlFor='name'>Last Name<sup>*</sup></label>
                                                <input type='text' className='form-control' id='lastName' name='lastName' placeholder='Last Name' value={lastName} onChange={e => setLastName(e.target.value)} />
                                                <strong className='invalid-feedback' >{lastNameError}</strong>
                                            </div>
                                            <div className='form-group'>
                                                <label htmlFor='email'>Email<sup>*</sup></label>
                                                <input type='email' className='form-control' id='email' name='email' placeholder='Email' value={email} onChange={e => setEmail(e.target.value)} />
                                                <strong className='invalid-feedback' >{emailError}</strong>
                                            </div>
                                            <div className='form-group'>
                                                <label htmlFor='phone'>Phone No<sup>*</sup></label>
                                                <input type='tel' className='form-control' id='phone' name='phone' placeholder='start with (6-9) and exactly 10 numbers only' value={phone} onChange={e => setPhone(e.target.value)} />
                                                <strong className='invalid-feedback' >{phoneError}</strong>
                                            </div>
                                            <div className='form-group'>
                                                <label htmlFor='role'>Role<sup>*</sup></label>
                                                <select class="form-control" aria-label="Default select example" id='role' name='role' value={role} onChange={e => setRole(e.target.value)}>
                                                    <option value="" selected>Open this, select Role</option>
                                                    <option value="admin">Admin</option>
                                                    <option value="user">User</option>
                                                </select>
                                                <strong className='invalid-feedback' >{roleError}</strong>
                                            </div>
                                            <div className='form-group'>
                                                <label htmlFor='password'>Password<sup>*</sup></label>
                                                <input type='password' className='form-control' id='password' name='password' placeholder='Minimum 7 characters required' value={password} onChange={e => setPassword(e.target.value)} />
                                                <strong className='invalid-feedback' >{passwordError}</strong>
                                            </div>
                                            <button className='btn btn-primary btn-auth-submit' type='submit'>Create account</button>
                                        </form>
                                        <p className='mb-0'>
                                            <Link to='/login' className='text-dark font-weight-bold'>Already have a account?  <strong>Sign in</strong></Link>
                                        </p>
                                    </div>
                                    <div className="col-md-6 d-flex align-items-center">
                                        <img src={register} alt="Register" className="img-fluid" />
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
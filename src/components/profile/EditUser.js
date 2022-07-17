import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link,  useNavigate, useParams } from 'react-router-dom';
import { editProfile, getSingleUser, updateUser, viewProfile, setLoggedIn } from '../../action/action';

function EditUser() {

    const [state, setState] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        password: ""
    })

    const {firstName, lastName, email, phone, password} = state;

    const handleInputChange = (e) => {
        let { name, value } = e.target;
        setState({ ...state, [name]: value });
    };

    let [firstNameError, setFirstNameError] = useState("");
    let [lastNameError, setLastNameError] = useState("");
    let [emailError, setEmailError] = useState("");
    let [passwordError, setPasswordError] = useState("");
    let [phoneError, setPhoneError] = useState("");

    const dispatch = useDispatch();
    
    const validate = () => {
        console.log("in validate")

        let firstNameError = "";
        let lastNameError = "";
        let emailError = "";
        let phoneError = "";
        let passwordError = "";

        const nameRegex = /^[a-zA-Z]{2,15}$/;
        const emailRegex = /^([a-zA-Z0-9_\.\-]+)@([a-zA-Z]+)\.([a-zA-Z]{2,5})$/;
        const phoneRegex = /^[6-9]{1}[0-9]{9}$/;
        const passwordRegex = /^[A-Za-z0-9]{7,15}$/;

        const firstNameField = document.getElementById('firstName');
        const lastNameField = document.getElementById('lastName');
        const emailField = document.getElementById('email');
        const phoneField = document.getElementById('phone');
        const passwordField = document.getElementById('password');
 
        if(firstName === "") {
            firstNameError = "Name field is required";
            setFirstNameError(firstNameError);
            firstNameField.classList.add('is-invalid')
        }
        else if(!nameRegex.test(firstName)) {
            firstNameError = "Please provide a valid name";
            setFirstNameError(firstNameError);
            firstNameField.classList.add('is-invalid');
        }
        else {
            firstNameField.classList.remove('is-invalid')
        }

        if(lastName === "") {
            lastNameError = "Name field is required";
            setLastNameError(lastNameError);
            lastNameField.classList.add('is-invalid')
        }
        else if(!nameRegex.test(lastName)) {
            lastNameError = "Please provide a valid name";
            setLastNameError(lastNameError);
            lastNameField.classList.add('is-invalid');
        }
        else {
            lastNameField.classList.remove('is-invalid')
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

        if( firstNameError || lastNameError || emailError || phoneError || passwordError) {
            return false;
        }

        return true

    }

    const navigate = useNavigate();
    let { id } = useParams();
    const { user } = useSelector((state) => state.data.user);
    const { isLogin } = useSelector((state) => state.data)

    console.log("Edit user id :", id)
    console.log("USER : ", user)
    console.log("STATE : ", state)

    useEffect(() => {
        dispatch(viewProfile(id))
        dispatch(setLoggedIn())
    }, [isLogin])

    useEffect(() => {
        if(user) {
            setState({...user});
        }
    }, [user])

    const userData = {
        firstName:firstName,
        lastName:lastName,
        email:email,
        phone:phone,
        password:password
    }

    const handleSubmit = e => {
        e.preventDefault();

        const isValid = validate();

        if(isValid) {
            dispatch(editProfile(userData, id))
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
                        <button className='btn btn-primary mb-5' onClick={() => navigate(-1)} ><i className="fa fa-arrow-left" aria-hidden="true"></i> Go Back</button>
                            <div className='row'>
                                <div className='col-md-6 mb-4 mb-md-0'>
                                    <h2 className='auth-section-title'>Edit Profile</h2>
                                    <p className='auth-section-subtitle'>Hey! something you want to change your personal data..Here it is</p>
                                    <form action='#' method='POST' onSubmit={handleSubmit} >
                                    <div className='form-group'>
                                        <label htmlFor='firstName'>First Name<sup>*</sup></label>
                                        <input type='text' className='form-control' id='firstName' name='firstName' placeholder='First Name'  value={firstName || ""} onChange={handleInputChange}/>
                                        <strong className='invalid-feedback' >{firstNameError}</strong>
                                    </div>
                                    <div className='form-group'>
                                        <label htmlFor='name'>Last Name<sup>*</sup></label>
                                        <input type='text' className='form-control' id='lastName' name='lastName' placeholder='Last Name'  value={lastName || ""} onChange={handleInputChange}/>
                                        <strong className='invalid-feedback' >{lastNameError}</strong>
                                    </div>
                                    <div className='form-group'>
                                        <label htmlFor='email'>Email<sup>*</sup></label>
                                        <input type='email' className='form-control' id='email' name='email' placeholder='Email' value={email || ""} onChange={handleInputChange}/>
                                        <strong className='invalid-feedback' >{emailError}</strong>
                                    </div>
                                    <div className='form-group'>
                                        <label htmlFor='phone'>Phone No<sup>*</sup></label>
                                        <input type='tel' className='form-control' id='phone' name='phone' placeholder='Phone No'  value={phone || ""} onChange={handleInputChange}/>
                                        <strong className='invalid-feedback' >{phoneError}</strong>
                                    </div>
                                    <div className='form-group'>
                                        <label htmlFor='password'>Password<sup>*</sup></label>
                                        <input type='text' className='form-control' id='password' name='password' placeholder='Password'  value={password || ""} onChange={handleInputChange}/>
                                        <strong className='invalid-feedback' >{passwordError}</strong>
                                    </div>
                                    <button className='btn btn-primary btn-auth-submit' type='submit'>Update Profile</button>
                                </form>
                                </div>
                                <div className="col-md-6 d-flex align-items-center">
                                    <img src="https://www.open.edu.au/-/media/blog/2016/09-sept/female-notebook-writing-sunny.jpg?rev=b834e2f825dc49f49fd80d951728c4c5&hash=324D7C36123DBC9B193FDD9B4C21D0DF" alt="Edit Profile" className="img-fluid"/>
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

export default EditUser

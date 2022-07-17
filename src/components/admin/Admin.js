import React, { useEffect } from 'react';
import '../../assets/css/Register.css';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import ValidateLogin from '../../container/utils/ValidateLogin';
import { useDispatch, useSelector } from 'react-redux';
import { setLoggedIn, userLoggedIn } from '../../action/action'
import ReactjsAlert from 'reactjs-alert';

function Admin() {

    const [state, setState] = useState({
        email: "",
        password: ""
    });

    const { email, password } = state;

    const handleInputChange = (e) => {
        let { name, value } = e.target;
        setState({ ...state, [name]: value });
    };

    let [emailError, setEmailError] = useState("");
    let [passwordError, setPasswordError] = useState("");
    const [status, setStatus] = useState(false);
    const [type, setType] = useState("success");
    const [title, setTitle] = useState("");

    const validate = () => {

        const error = ValidateLogin(email, password)

        let emailError = error.emailError;
        let passwordError = error.passwordError;

        const emailField = document.getElementById('email');
        const passwordField = document.getElementById('password');

        if (emailError) {
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

        if (emailError || passwordError) {
            return false;
        }

        return true
    }

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { errormessage } = useSelector(state => state.data)
    const { successmessage } = useSelector(state => state.data)
    const { isLogin } = useSelector((state) => state.data)

    useEffect(() => {
        if (successmessage) {
            setStatus(true)
            setType("success")
            setTitle(successmessage)
            dispatch(setLoggedIn())
        }
        else if (errormessage) {
            setStatus(true)
            setType("error")
            setTitle(errormessage)
        }
    }, [successmessage, errormessage])

    const handleSubmit = (e) => {
        e.preventDefault();

        const isValid = validate();

        if (isValid) {
            dispatch(userLoggedIn({ email: email, password: password, role: "admin" }))
            if (errormessage) {
                setStatus(true)
                setType("error")
                setTitle(errormessage)
            }
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
                                        <img src="https://www.travelperk.com/wp-content/uploads/Guides_The-ultimate-guide-to-administrative-tasks.png" alt="Admin-login" className="img-fluid" />
                                    </div>
                                </div>
                            </section>
                        </div>
                    </div>
                </div>
            </main>
            <ReactjsAlert
                status={status} // true or false
                type={type} // success, warning, error, info
                title={title}
                Close={() => {
                    if(isLogin) {
                        setStatus(false)
                        navigate('/adminPanel')
                    }
                    setStatus(false)
                }}
            />
        </>
    )
}

export default Admin

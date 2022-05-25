import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import '../assets/css/Register.css'
import register from '../assets/images/register.jpg'
import { login, selectUser } from '../feature/UserSlice';

function Register() {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [phone, setPhone] = useState("");

    const dispatch = useDispatch();

    const handleSubmit = e => {
        e.preventDefault();

        dispatch(login({
            name:name,
            email:email,
            phone:phone,
            password:password,
            loggedIn:true
        }))

    }

  return (
    <>
      <main className='page-auth register'>
            <div className='container'>
                <div className='row'>
                    <div className='col-lg-10 offset-lg-1'>
                        <section className='auth-wrapper'>
                            <div className='row'>
                                <div className='col-md-6 mb-4 mb-md-0'>
                                    <h2 className='auth-section-title'>Create account</h2>
                                    <p className='auth-section-subtitle'>Hey! you are going to be part of us</p>
                                    <form action='#' method='POST' onSubmit={handleSubmit} >
                                    <div className='form-group'>
                                        <label htmlFor='name'>Name<sup>*</sup></label>
                                        <input type='text' className='form-control' id='name' name='name' placeholder='Name' value={name} onChange={e => setName(e.target.value)}/>
                                    </div>
                                    <div className='form-group'>
                                        <label htmlFor='email'>Email<sup>*</sup></label>
                                        <input type='email' className='form-control' id='email' name='email' placeholder='Email' value={email} onChange={e => setEmail(e.target.value)}/>
                                    </div>
                                    <div className='form-group'>
                                        <label htmlFor='phone'>Phone No<sup>*</sup></label>
                                        <input type='tel' className='form-control' id='phone' name='phone' placeholder='Phone No' value={phone} onChange={e => setPhone(e.target.value)}/>
                                    </div>
                                    <div className='form-group'>
                                        <label htmlFor='password'>Password<sup>*</sup></label>
                                        <input type='password' className='form-control' id='password' name='password' placeholder='Password' value={password} onChange={e => setPassword(e.target.value)}/>
                                    </div>
                                    <button className='btn btn-primary btn-auth-submit' type='submit'>Create account</button>
                                </form>
                                <p className='mb-0'>
                                    <a href='#' className='text-dark font-weight-bold'>Already have a account?  <strong>Sign in</strong></a>
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

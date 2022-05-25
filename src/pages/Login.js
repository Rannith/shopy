import React from 'react'
import '../assets/css/Register.css'
import login from '../assets/images/login.jpg'

function Login() {

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
                                    <form action='#' method='POST'>
                                    <div className='form-group'>
                                        <label htmlFor='email'>Email<sup>*</sup></label>
                                        <input type='email' className='form-control' id='email' name='email' placeholder='Email' />
                                    </div>
                                    <div className='form-group'>
                                        <label htmlFor='password'>Password<sup>*</sup></label>
                                        <input type='password' className='form-control' id='password' name='password' placeholder='Password' />
                                    </div>
                                    <div className="form-actions-wrapper d-flex flex-wrap align-items-center justify-content-between">
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" value="" id="keepLogin" />
                                            <label className="form-check-label" htmlFor="keepLogin">
                                                keep me login
                                            </label>
                                        </div>
                                    </div>
                                    <button className="btn btn-primary btn-auth-submit" type="submit">Submit</button>
                                    </form>
                                    <p className="mb-0">
                                        <a href="#" className="text-dark font-weight-bold">New User? Sign Up</a>
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


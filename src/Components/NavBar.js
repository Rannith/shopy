import React from 'react'
import '../assets/css/Header.css'
import brand from '../assets/images/brand.PNG'
import { useNavigate } from 'react-router-dom'

function NavBar() {

    const navigate = useNavigate()
    var loggedIn = true

    if (!localStorage.getItem("token")) {
        loggedIn = false
    }

    const handleCart = (e) => {
        e.preventDefault();

        navigate('/cart')
    }

    return (
        <>
            <div className="nav-shopy">
                <nav className="navbar navbar-dark navbar-expand-md navigation-clean-search">
                    <div className="container">
                        <a className="navbar-brand" onClick={() => navigate('/')}>
                            <img src={brand} alt='SHOPY' width={138} height={50} />
                        </a>
                        <button
                            className="navbar-toggler"
                            data-toggle="collapse"
                            data-target="#navcol-1"
                        >
                            <span className="sr-only">Toggle navigation</span>
                            <span className="navbar-toggler-icon" />
                        </button>
                        <div className="collapse navbar-collapse" id="navcol-1">

                            <ul className="nav navbar-nav me-4">
                                <li className="nav-item" role="presentation">
                                    <a className="nav-link active" onClick={() => navigate('/')}>
                                        Home
                                    </a>
                                </li>
                                <li className="nav-item" role="presentation">
                                    <a className="nav-link" >
                                        Contact
                                    </a>
                                </li>
                                <li className="nav-item" role="presentation">
                                    <a className="nav-link" >
                                        About
                                    </a>
                                </li>
                            </ul>
                            <form className="form-inline mr-auto" target="_self">
                                    <div className="form-group">
                                        <label htmlFor="search-field">
                                            <i className="fa fa-search" />
                                        </label>
                                        <input
                                            className="form-control search-field"
                                            type="search"
                                            name="category"
                                            id="search-field"
                                        />
                                    </div>
                                </form>
                            <a className="nav-link"  onClick={() => navigate('/viewprofile')}>
                                <i className='fa fa-user-circle user-circle' style={{ fontSize: 25 }} ></i>
                            </a>
                            <a className="nav-link" onClick={handleCart}>
                                <i className='fa fa-shopping-cart shopping-cart' style={{ fontSize: 25 }} ></i>
                            </a>
                            {loggedIn ? <></> :
                                <>  <a className="btn btn-light action-button me-2" role="button" href="login">
                                    Log In
                                </a>
                                    <a className="btn btn-light action-button me-2" role="button" href="register">
                                        Sign Up
                                    </a>
                                    <a className="btn btn-light action-button" role="button" href="admin">
                                        Admin Login
                                    </a>
                                </>
                            }
                        </div>
                    </div>
                </nav>
            </div>
        </>
    )
}

export default NavBar

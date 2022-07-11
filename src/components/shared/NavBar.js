import React, { useEffect } from 'react'
import '../../assets/css/Header.css'
import brand from '../../assets/images/brand.PNG'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { setLoggedIn } from '../../action/action'

function NavBar() {

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const { isLogin } = useSelector((state) => state.data)
    console.log(isLogin)
    useEffect(() => {
        if (localStorage.getItem("token")) {
            dispatch(setLoggedIn())
        }
        console.log("Loggin status : " + isLogin)
    }, [isLogin])


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
                                    </label>
                                </div>
                            </form>

                            <a data-toggle="tooltip" data-placement="bottom" title="Profile" className="nav-link" onClick={() => navigate('/viewprofile')}>
                                <i className='fa fa-user-circle user-circle' style={{ fontSize: 25 }} ></i>
                            </a>

                            <a data-toggle="tooltip" data-placement="bottom" title="Cart" className="nav-link" onClick={handleCart}>
                                <i className='fa fa-shopping-cart shopping-cart' style={{ fontSize: 25 }} ></i>
                            </a>
                            {isLogin ? <></> :
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

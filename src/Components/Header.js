import React, { useEffect } from 'react'
import '../assets/css/Header.css'
import brand from '../assets/images/brand.PNG'
import brandRbg from '../assets/images/brand-rbg.png'
import model from '../assets/images/model_1.png'
import { useNavigate } from 'react-router-dom'
import { loadUsers } from '../Action/action'
import { useDispatch, useSelector } from 'react-redux'
import CryptoJS from 'crypto-js'

function Header() {

    const navigate = useNavigate()
    // let dispatch = useDispatch()

    // useEffect(() => {
    //     dispatch(loadUsers())
    // }, [])

    // const { users } = useSelector(state => state.data)

    // console.log("Header users", users)

    // const decryptToken = () => {

    //     if (!localStorage.getItem("token")) {
    //         return false;
    //     }

    //     var encryptData = localStorage.getItem("token");

    //     var bytes = CryptoJS.AES.decrypt(encryptData, "qwertyuiop");
    //     var decryptedData = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));

    //     return decryptedData;
    // }

    // const handleProfileClick = () => {
    //     let loginCredentials = decryptToken();
    //     console.log("login credintial", loginCredentials)

    //     navigate(`/viewProfile`)
    // }

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
            <div className="header-shopy">
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
                                        name="search"
                                        id="search-field"
                                    />
                                </div>
                            </form>
                            <a className="nav-link" onClick={() => navigate('/viewprofile')}>
                                <i className='fa fa-user-circle user-circle'  style={{ fontSize: 25 }} ></i>
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
                <div className="container hero">
                    <div className="row">
                        <div className="col-12 col-lg-6 col-xl-5 offset-xl-1">
                            <img src={brandRbg} alt='SHOPY' />
                            <h1>Make Your Perfect Choice</h1>
                            <div id='para'>
                                Summer Sale is <strong>ON !</strong><br />
                                <h2>Get up to <strong>60% Off</strong> for<br />
                                    New Arrivals</h2>{" "}
                            </div>
                            <button className="btn btn-light btn-lg action-button" onClick={() => navigate('/products', {state: "all"} )} type="button">
                                Get Started
                            </button>
                        </div>
                        <div className="col-md-5 col-lg-5 offset-lg-1 offset-xl-0 d-none d-lg-block phone-holder">
                            <div className="banner-img">
                                <img src={model} className="device" />
                                {/* <div className="screen"></div> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header


// class Header extends Component {
//     render() {
//         return (
//             <>
//                 <div className="header-shopy">
//                     <nav className="navbar navbar-dark navbar-expand-md navigation-clean-search">
//                         <div className="container">
//                             <a className="navbar-brand" href="#">
//                                 <img src={brand} alt='SHOPY' width={138} height={50} />
//                             </a>
//                             <button
//                                 className="navbar-toggler"
//                                 data-toggle="collapse"
//                                 data-target="#navcol-1"
//                             >
//                                 <span className="sr-only">Toggle navigation</span>
//                                 <span className="navbar-toggler-icon" />
//                             </button>
//                             <div className="collapse navbar-collapse" id="navcol-1">
//                                 <ul className="nav navbar-nav">
//                                     <li className="nav-item" role="presentation">
//                                         <a className="nav-link active" href="#">
//                                             Home
//                                         </a>
//                                     </li>
//                                     <li className="nav-item" role="presentation">
//                                         <a className="nav-link" href="#">
//                                             Contact
//                                         </a>
//                                     </li>
//                                     <li className="nav-item" role="presentation">
//                                         <a className="nav-link" href="#">
//                                             About
//                                         </a>
//                                     </li>
//                                     <li className="nav-item" role="presentation">
//                                         <a className="nav-link" href="#">

//                                         </a>
//                                     </li>
//                                 </ul>
//                                 <form className="form-inline mr-auto" target="_self">
//                                     <div className="form-group">
//                                         <label htmlFor="search-field">
//                                             <i className="fa fa-search" />
//                                         </label>
//                                         <input
//                                             className="form-control search-field"
//                                             type="search"
//                                             name="search"
//                                             id="search-field"
//                                         />
//                                     </div>
//                                 </form>
//                                 <a className="nav-link" href="#">
//                                     <i className='fas fa-user-circle' onClick={() => navigate(`/viewProfile/${user.id}`)} style={{ fontSize: 25 }} ></i>
//                                 </a>
//                                 <a className="nav-link" href="#">
//                                     <i className='fa fa-shopping-cart' style={{ fontSize: 25 }} ></i>
//                                 </a>
//                                 <a className="btn btn-light action-button me-2" role="button" href="#">
//                                     Log In
//                                 </a>
//                                 {/* <span className="navbar-text">
//                                     {" "}
//                                     <a href="#" className="login">
//                                         Log In
//                                     </a>
//                                 </span> */}
//                                 <a className="btn btn-light action-button" role="button" href="#">
//                                     Sign Up
//                                 </a>
//                             </div>
//                         </div>
//                     </nav>
//                     <div className="container hero">
//                         <div className="row">
//                             <div className="col-12 col-lg-6 col-xl-5 offset-xl-1">
//                                 <img src={brandRbg} alt='SHOPY' />
//                                 <h1>Make Your Perfect Choice</h1>
//                                 <div id='para'>
//                                     Summer Sale is <strong>ON !</strong><br />
//                                     <h2>Get up to <strong>60% Off</strong> for<br />
//                                         New Arrivals</h2>{" "}
//                                 </div>
//                                 <button className="btn btn-light btn-lg action-button" type="button">
//                                     Get Started
//                                 </button>
//                             </div>
//                             <div className="col-md-5 col-lg-5 offset-lg-1 offset-xl-0 d-none d-lg-block phone-holder">
//                                 <div className="iphone-mockup">
//                                     <img src={model} className="device" />
//                                     {/* <div className="screen"></div> */}
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>

//             </>
//         )
//     }
// }

// export default Header

import '../../assets/css/Header.css'
import brand from '../../assets/images/brand.PNG'
import brandRbg from '../../assets/images/brand-rbg.png'
import model from '../../assets/images/model_1.png'
import { useNavigate } from 'react-router-dom'
import NavBar from './NavBar'
import { useEffect } from 'react'

function Header() {

    const navigate = useNavigate()
    var loggedIn = true

    useEffect(() => {
        if (!localStorage.getItem("token")) {
            loggedIn = false
        }
    })

    return (
        <>
            <div className="header-shopy">
                <NavBar />
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
                            <button className="btn btn-light btn-lg action-button" onClick={() => navigate('/products', { state: "all" } )} type="button">
                                Get Started
                            </button>
                        </div>
                        <div className="col-md-5 col-lg-5 offset-lg-1 offset-xl-0 d-none d-lg-block phone-holder">
                            <div className="banner-img">
                                <img src={model} className="device" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header

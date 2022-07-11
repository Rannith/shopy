import React, { Component } from 'react'
import '../../assets/css/Footer.css'

class Footer extends Component {
    render() {
        return (
            <>
                <div className="footer-dark">
                    <footer>
                        <div className="container">
                            <div className="row">
                                <div className="col-sm-6 col-md-3 item">
                                    <img src='https://gjoa.demosphere-secure.com/_uploads/57645180dfa3fe367ff30f16/ADIDAS_LOGO_WHITE_SILHOUETTE_SHADOW_BORDER.png' className='mt-5 me-2' alt='logo' width='100px' height='45px' />
                                    <img src='https://www.pikpng.com/pngl/m/42-429936_puma-logo-png-images-transparent-background-rh-pngnames.png' className='mt-5 mf-5' alt='logo' width='100px' height='45px' /><br />
                                    <img src='https://www.marketing91.com/wp-content/uploads/2016/11/fastrack.jpg' className='mt-5 mr-5 ' alt='logo' width='100px' height='45px' />
                                </div>
                                <div className="col-sm-6 col-md-3 item">
                                    <h3>Offical Partners</h3>
                                    <ul>
                                        <li> 
                                            <strong>ADIDAS</strong>
                                        </li>
                                        <li>
                                            <strong>PUMA</strong>
                                        </li>
                                        <li>
                                            <strong>FASTRACK</strong>
                                        </li>
                                    </ul>
                                </div>
                                <div className="col-md-6 item text">
                                    <h3>SHOPY</h3>
                                    <p className='mb-3'>
                                        With the trendiest, freshest, and most unique styles from across India and the world, SHOPY invites you to express your personal style fearlessly, and with a confidence and optimism that cannot be easily shaken.
                                    </p>
                                    <p>
                                    We bring you the trendiest and most exclusive brands from around the world to your wardrobe. Forget scouring the net for what’s hot globally, we’ve got you covered
                                    </p>
                                </div>
                                <div className="col item social">
                                    <a href="#">
                                        <i className="icon ion-social-facebook" />
                                    </a>
                                    <a href="#">
                                        <i className="icon ion-social-twitter" />
                                    </a>
                                    <a href="#">
                                        <i className="icon ion-social-snapchat" />
                                    </a>
                                    <a href="#">
                                        <i className="icon ion-social-instagram" />
                                    </a>
                                </div>
                            </div>
                            <p className="copyright">SHOPY © 2022</p>
                        </div>
                    </footer>
                </div>
            </>
        )
    }
}

export default Footer

import React, { Component } from 'react'
import '../../assets/css/CategoryCard.css'
import tShirt from '../../assets/images/t-shirt.png'
import { Link } from 'react-router-dom'

export class CategoryCard extends Component {
    render() {
        return (
            <>
                <section className="wrapper">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6 mb-4">
                                <div className="card text-white card-has-bg click-col"
                                    style={{
                                        backgroundImage:
                                            `url(${tShirt})`
                                    }}
                                >
                                    <img
                                        className="card-img d-none"
                                        src="https://source.unsplash.com/600x900/?tech,street"
                                        alt="Goverment Lorem Ipsum Sit Amet Consectetur dipisi?"
                                    />
                                    <div className="card-img-overlay d-flex flex-column">
                                        <div className="card-body">
                                            <small className="card-meta mb-2">Premium Brands Only</small>
                                            <h1 className="card-title mt-0 ">
                                                <a className="text-white">
                                                    T-Shirts
                                                </a>
                                            </h1>
                                            <small>
                                                Fit as Body
                                            </small>
                                        </div>
                                        <Link to="/products" state={{ category: "tshirt" }} ><button className="btn btn-light btn-lg action-button mb-5" type="button">
                                            Shop Now
                                        </button></Link>
                                        <div className="card-footer">
                                            <div className="media">
                                                <img
                                                    className="mr-3 rounded-circle"
                                                    src="https://kongres-magazine.eu/wp-content/uploads/2016/11/Special-Offer-.jpg"
                                                    alt="Generic placeholder image"
                                                    style={{ maxWidth: 70 }}
                                                />
                                                <div className="media-body">
                                                    <h4 className="my-0 text-white d-block">Special Offer going on!!</h4>
                                                    <small>Big Deals on Top Brands</small>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div
                                    className="card text-white card-has-bg click-col"
                                    style={{
                                        backgroundImage:
                                            'url("https://images.unsplash.com/photo-1617127365659-c47fa864d8bc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80")'
                                    }}
                                >
                                    <img
                                        className="card-img d-none"
                                        src="https://source.unsplash.com/600x900/?computer,design"
                                        alt="Goverment Lorem Ipsum Sit Amet Consectetur dipisi?"
                                    />
                                    <div className="card-img-overlay d-flex flex-column">
                                        <div className="card-body">
                                            <small className="card-meta mb-2">World Best Brand's Only</small>
                                            <h1 className="card-title mt-0 ">
                                                <a className="text-white" herf="#">
                                                    Suits
                                                </a>
                                            </h1>
                                            <small>
                                                Only Premium Products
                                            </small>
                                        </div>
                                        <Link to="/products" state={{ category: "suit" }} ><button className="btn btn-light btn-lg action-button mb-5" type="button">
                                            Shop Now
                                        </button></Link>
                                        <div className="card-footer">
                                            <div className="media">
                                                <img
                                                    className="mr-3 rounded-circle"
                                                    src="https://www.premiumaluminium.co.za/wp-content/uploads/2018/07/Premium-Quality-Badge.png"
                                                    alt="Generic placeholder image"
                                                    style={{ maxWidth: 70 }}
                                                />
                                                <div className="media-body">
                                                    <h4 className="my-0 text-white d-block">Special Offer going on Raymond's Suit</h4>
                                                    <small>Grab Soon before going on..</small>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='row'>

                            <div className="col-md-6">
                                <div
                                    className="card text-white card-has-bg click-col"
                                    style={{
                                        backgroundImage:
                                            'url("https://images.unsplash.com/photo-1524805444758-089113d48a6d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8d2F0Y2h8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60")'
                                    }}
                                >
                                    <img
                                        className="card-img d-none"
                                        src="https://source.unsplash.com/600x900/?tech,street"
                                        alt="Goverment Lorem Ipsum Sit Amet Consectetur dipisi?"
                                    />
                                    <div className="card-img-overlay d-flex flex-column">
                                        <div className="card-body">
                                            <small className="card-meta mb-2">Top Deals ob Top Brand</small>
                                            <h1 className="card-title mt-0 ">
                                                <a className="text-white" herf="#">
                                                    Watches
                                                </a>
                                            </h1>
                                            <small>
                                                Time with Perfection
                                            </small>
                                        </div>
                                        <Link to="/products" state={{ category: "watch" }} ><button className="btn btn-light btn-lg action-button mb-5" type="button">
                                            Shop Now
                                        </button></Link>
                                        <div className="card-footer">
                                            <div className="media">
                                                <img
                                                    className="mr-3 rounded-circle"
                                                    src="http://www.pngall.com/wp-content/uploads/2016/04/50-Off-Transparent-Free-PNG.png"
                                                    alt="Generic placeholder image"
                                                    style={{ maxWidth: 70 }}
                                                />
                                                <div className="media-body">
                                                    <h4 className="my-0 text-white d-block">50% Off on Top Brands</h4>
                                                    <small>Premium at low cost</small>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div
                                    className="card text-white card-has-bg click-col"
                                    style={{
                                        backgroundImage:
                                            'url("https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c2hvZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60")'
                                    }}
                                >
                                    <img
                                        className="card-img d-none"
                                        src="https://source.unsplash.com/600x900/?tree,nature"
                                        alt="Goverment Lorem Ipsum Sit Amet Consectetur dipisi?"
                                    />
                                    <div className="card-img-overlay d-flex flex-column">
                                        <div className="card-body">
                                            <small className="card-meta mb-2">Make a Super Deal on Top Brands</small>
                                            <h1 className="card-title mt-0 ">
                                                <a className="text-white" herf="#">
                                                    Shoes
                                                </a>
                                            </h1>
                                            <small>
                                                Keep one step ahead in effortless style
                                            </small>
                                        </div>
                                        <Link to="/products" state={{ category: "shoe" }} ><button className="btn btn-light btn-lg action-button mb-5" type="button">
                                            Shop Now
                                        </button></Link>
                                        <div className="card-footer">
                                            <div className="media">
                                                <img
                                                    className="mr-3 rounded-circle"
                                                    src="http://st.depositphotos.com/1031343/5107/v/950/depositphotos_51072035-stock-illustration-great-deal-stamp.jpg"
                                                    alt="Generic placeholder image"
                                                    style={{ maxWidth: 70 }}
                                                />
                                                <div className="media-body">
                                                    <h4 className="my-0 text-white d-block">Upto 80% Offer on Premium Brands</h4>
                                                    <small>Only Trusted Products</small>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section >
            </>
        )
    }
}

export default CategoryCard

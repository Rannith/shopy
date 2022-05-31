import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { loadProducts } from '../redux/action'
import '../assets/css/Products.css'
import Header from './Header'
import { useNavigate } from 'react-router-dom'

function Products() {

    let dispatch = useDispatch()
    const navigate = useNavigate()

    useEffect(() => {
        dispatch(loadProducts());
    }, [])

    const { products } = useSelector(state => state.data);

    return (
        <>
            <Header />
            <div className="container bg-white product-list">
                <nav className="navbar navbar-expand-md navbar-light bg-white">
                    <div className="container-fluid p-0">
                        <a className="navbar-brand text-uppercase fw-800" href="#">
                            <span className="border-red pe-2">SHOPY</span>Our Products
                        </a>
                        <button
                            className="navbar-toggler"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#myNav"
                            aria-controls="myNav"
                            aria-expanded="false"
                            aria-label="Toggle navigation"
                        >
                            <span className="fas fa-bars" />
                        </button>
                        <div className="collapse navbar-collapse" id="myNav">
                            <div className="navbar-nav ms-auto">
                                <a className="nav-link active" aria-current="page" href="#">
                                    All
                                </a>
                                <a className="nav-link" href="#">
                                    T-Shirts
                                </a>
                                <a className="nav-link" href="#">
                                    Suits
                                </a>
                                <a className="nav-link" href="#">
                                    Watches
                                </a>
                                <a className="nav-link" href="#">
                                    Shoes
                                </a>
                            </div>
                        </div>
                    </div>
                </nav>
                <div className="row">
                    {
                        products.map((product) => {
                            return (
                                <>
                                    <div className="col-xl-3 col-lg-4 col-md-6 mb-4 admin-product">
                                        <div className="bg-white rounded shadow-sm">
                                            <img
                                                src={product.image}
                                                alt=""
                                                className="img-fluid product-card"
                                                width="290px"
                                                height="auto"
                                            />
                                            <div className="p-4">
                                                <h5 className="text-dark">
                                                    {product.productname}
                                                </h5>
                                                <h5 className="product-old-price">Old Price: ₹{product.oldprice}</h5>
                                                <h5 className="product-price">New Price: ₹{product.newprice}</h5>
                                                <div className="d-flex align-items-center justify-content-between rounded-pill bg-light px-3 py-2 mt-4">
                                                    <button className='btn btn-primary' onClick={() => navigate(`/viewproduct/${product.id}`)} >View Product</button>
                                                    <button className='btn btn-success' >Add to Cart</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </>
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}

export default Products

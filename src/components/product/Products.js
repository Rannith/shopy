import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addProductsToCart, loadProducts, getProductCategory, viewProfile } from '../../action/action'
import '../../assets/css/Products.css'
import { useNavigate, useLocation } from 'react-router-dom'
import Footer from '../shared/Footer'
import NavBar from '../shared/NavBar'
import jwtDecode from 'jwt-decode'
import ReactjsAlert from 'reactjs-alert'

const Products = React.memo(() => {

    let dispatch = useDispatch()
    const navigate = useNavigate()
    const location = useLocation()
    const [status, setStatus] = useState(false);
    const [type, setType] = useState("success");
    const [title, setTitle] = useState("");

    let token

    const { category } = location.state
    const { products } = useSelector(state => state.data.products);
    const { user } = useSelector((state) => state.data.user)
    const { isLogin } = useSelector((state) => state.data)
    const { successmessage } = useSelector(state => state.data)
    const { productsCategory } = useSelector(state => state.data)

    console.log("Product Category : ", productsCategory.productCategory)

    const findActive = () => {
        const link = document.querySelectorAll('.nav-link-product')

        link.forEach(element => {
            if (element.classList.contains('active')) {
                element.classList.remove('active');
            }
        });
    }

    useEffect(() => {
        if (localStorage.getItem('token')) {
            token = jwtDecode(localStorage.getItem("token"))
            dispatch(loadProducts(category));
            dispatch(viewProfile(token.id))
            dispatch(getProductCategory())
            handleClick()
        }
        else {
            navigate('/login')
        }
    }, [isLogin])

    useEffect(() => {
        if (successmessage !== "Successfully Login" && successmessage !== "") {
            setStatus(true)
            setTitle(successmessage)
        }
    }, [successmessage])

    console.log("PRODUCTS : ", products)

    const handleClick = (productCategory) => {

        if (!productCategory) {
            findActive()
            document.getElementById('all').classList.add("active")
            productCategory = undefined
            dispatch(loadProducts(productCategory));
        }
        else if (productsCategory.productCategory) {
            findActive()
            document.getElementById(productCategory).classList.add("active")
            dispatch(loadProducts(productCategory));

        }
        // if (productCategory === "tshirt") {
        //     findActive()
        //     document.getElementById('tshirt').classList.add("active")
        //     dispatch(loadProducts(productCategory));
        // } else if (productCategory === "all") {
        //     findActive()
        //     document.getElementById('all').classList.add("active")
        //     productCategory = undefined
        //     dispatch(loadProducts(productCategory));
        // } else if (productCategory === "suit") {
        //     findActive()
        //     document.getElementById('suit').classList.add("active")
        //     dispatch(loadProducts(productCategory));
        // } else if (productCategory === "watch") {
        //     findActive()
        //     document.getElementById('watch').classList.add("active")
        //     dispatch(loadProducts(productCategory));
        // } else if (productCategory === "shoe") {
        //     findActive()
        //     document.getElementById('shoe').classList.add("active")
        //     dispatch(loadProducts(productCategory));
        // }
    }

    const addToCart = (product, userId) => {
        setStatus(true)
        setTitle(successmessage)
        dispatch(addProductsToCart(product, userId))
    }

    return (
        <>
            <NavBar />
            <div className="container bg-white product-list">
                <nav className="navbar navbar-expand-md navbar-light bg-white">
                    <div className="container-fluid p-0">
                        <a className="navbar-brand text-uppercase fw-800">
                            <span className="border-red pe-2">SHOPY</span>
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
                                {/* {
                                    productsCategory.productCategory && productsCategory.productCategory.map((option) => {
                                        <h1>{option.productCategory}</h1>
                                    })
                                } */}
                                <a className="nav-link-product active" id="all" aria-current="page" onClick={() => handleClick("all")}>
                                    All
                                </a>
                                {productsCategory.productCategory && productsCategory.productCategory.map((option) => (
                                    <a className="nav-link-product" id={option.productCategory} onClick={() => handleClick(option.productCategory)}>
                                        {option.productCategory}
                                    </a>
                                ))}
                                {/* <a className="nav-link-product" id="tshirt" onClick={() => handleClick("tshirt")}>
                                    T-Shirts
                                </a>
                                <a className="nav-link-product" id="suit" onClick={() => handleClick("suit")}>
                                    Suits
                                </a>
                                <a className="nav-link-product" id="watch" onClick={() => handleClick("watch")}>
                                    Watches
                                </a>
                                <a className="nav-link-product" id="shoe" onClick={() => handleClick("shoe")}>
                                    Shoes
                                </a> */}
                            </div>
                        </div>
                    </div>
                </nav>
                <div className="row">
                    {
                        products && products.map((product) => {
                            return (
                                <>
                                    <div className="col-xl-3 col-lg-4 col-md-6 mb-4 admin-product" key={product._id} >
                                        <div className="bg-white rounded shadow-sm">
                                            <img
                                                src={product.productImageUrl}
                                                alt=""
                                                className="img-fluid product-card"
                                                width="290px"
                                                height="auto"
                                            />
                                            <div className="p-4">
                                                <h5 className="text-dark">
                                                    {product.productName}
                                                    {product._id}
                                                </h5>
                                                <h5 className="product-old-price">Old Price: ???{product.oldPrice}</h5>
                                                <h5 className="product-price">New Price: ???{product.newPrice}</h5>
                                                <div className="d-flex align-items-center justify-content-between rounded-pill bg-light px-3 py-2 mt-4">
                                                    <button className='btn btn-primary' onClick={() => navigate(`/viewproduct/${product._id}`)} >View Product</button>
                                                    <button className='btn btn-success' onClick={() => addToCart(product, user._id)}>Add to Cart</button>
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
            <Footer />
            <ReactjsAlert
                status={status} // true or false
                type={type} // success, warning, error, info
                title={title}
                Close={() => setStatus(false)}
            />
        </>
    )
})

export default Products

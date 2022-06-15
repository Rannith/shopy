import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addProductToCart, loadProducts, addQuantity, loadTshirts, loadShoes, loadWatches, loadSuits } from '../Action/action'
import '../assets/css/Products.css'
import Header from './Header'
import { useNavigate, useLocation } from 'react-router-dom'
import Footer from './Footer'
import NavBar from './NavBar'

const Products = React.memo(() => {

    let dispatch = useDispatch()
    const navigate = useNavigate()
    const location = useLocation()

    const { category } = location.state

    useEffect(() => {
        console.log("category : ", category)
        dispatch(loadProducts(category));
    }, [])

    // if (category === "") {
    //     dispatch(loadProducts());
    // } else if (category === "tshirt") {
    //     dispatch(loadTshirts());
    // } else if (category === "suit") {
    //     dispatch(loadSuits());
    // } else if (category === "watch") {
    //     dispatch(loadWatches());
    // } else if (category === "shoe") {
    //     dispatch(loadShoes());
    // }


    // useEffect(() => {
    //     if (category === "tshirt") {
    //         findActive()
    //         document.getElementById('tshirt').classList.add("active")
    //         dispatch(loadTshirts());
    //     } else if (category === "all") {
    //         findActive()
    //         document.getElementById('all').classList.add("active")
    //         dispatch(loadProducts());
    //     } else if (category === "suit") {
    //         findActive()
    //         document.getElementById('suit').classList.add("active")
    //         dispatch(loadSuits());
    //     } else if (category === "watch") {
    //         findActive()
    //         document.getElementById('watch').classList.add("active")
    //         dispatch(loadWatches());
    //     } else if (category === "shoe") {
    //         findActive()
    //         document.getElementById('shoe').classList.add("active")
    //         dispatch(loadShoes());
    //     }
    // })

    const { products } = useSelector(state => state.data);
    const { value } = useSelector(state => state.data)

    const findActive = () => {
        const link = document.querySelectorAll('.nav-link-product')

        console.log(link)

        link.forEach(element => {
            if (element.classList.contains('active')) {
                element.classList.remove('active');
            }
        });
    }

    const handleClick = (productCategory) => {


        if (productCategory === "tshirt") {
            findActive()
            document.getElementById('tshirt').classList.add("active")
            dispatch(loadProducts(productCategory));
        } else if (productCategory === "all") {
            findActive()
            document.getElementById('all').classList.add("active")
            dispatch(loadProducts(productCategory));
        } else if (productCategory === "suit") {
            findActive()
            document.getElementById('suit').classList.add("active")
            dispatch(loadProducts(productCategory));
        } else if (productCategory === "watch") {
            findActive()
            document.getElementById('watch').classList.add("active")
            dispatch(loadProducts(productCategory));
        } else if (productCategory === "shoe") {
            findActive()
            document.getElementById('shoe').classList.add("active")
            dispatch(loadProducts(productCategory));
        }
    }

    const addToCart = (product) => {
        console.log("Product in Product:", product)

        const existingItem = value.find(item => item.id === product.id)
        console.log("existing item", existingItem)

        if (existingItem) {
            const id = existingItem.id
            console.log("IIDD : ", id)
            dispatch(addQuantity(id, existingItem))
        }
        else {
            dispatch(addProductToCart(product))
        }
    }

    return (
        <>
            <NavBar />
            <div className="container bg-white product-list">
                <nav className="navbar navbar-expand-md navbar-light bg-white">
                    <div className="container-fluid p-0">
                        <a className="navbar-brand text-uppercase fw-800">
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
                                <a className="nav-link-product active" id="all" aria-current="page" onClick={() => handleClick("all")}>
                                    All
                                </a>
                                <a className="nav-link-product" id="tshirt" onClick={() => handleClick("tshirt")}>
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
                                    <div className="col-xl-3 col-lg-4 col-md-6 mb-4 admin-product" key={product.id} >
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
                                                    <button className='btn btn-success' onClick={() => addToCart(product)}>Add to Cart</button>
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
        </>
    )
})

export default Products

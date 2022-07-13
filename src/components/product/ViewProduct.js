import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom'
import { useState } from 'react';
import { addProductsToCart, getSingleProduct, viewProfile } from '../../action/action';
import '../../assets/css/ViewProduct.css'
import jwtDecode from 'jwt-decode';
import ValidateSession from '../../container/utils/ValidateSession';
// import { useAlert } from 'react-alert';
import ReactjsAlert from 'reactjs-alert';


function ViewProduct() {

    const [state, setState] = useState({
        productName: "",
        productImageUrl: "",
        oldPrice: "",
        newPrice: ""
    })

    let { id } = useParams();
    let dispatch = useDispatch();
    const navigate = useNavigate()
    const [status, setStatus] = useState(false);
    const [type, setType] = useState("success");
    const [title, setTitle] = useState("");
    let token
    const { product } = useSelector(state => state.data.product)
    const { productName, productImageUrl, oldPrice, newPrice } = state;
    const { user } = useSelector((state) => state.data.user)
    const { successmessage } = useSelector(state => state.data)

        console.log("message : ", successmessage);
    if (localStorage.getItem('token')) {
        token = jwtDecode(localStorage.getItem("token"))
    }

    useEffect(() => {
        if (localStorage.getItem('token')) {
            dispatch(getSingleProduct(id))
            dispatch(viewProfile(token.id))
        }
    }, [])

    useEffect(() => {
        if (product) {
            setState({ ...product })
        }
    }, [product])

    const handleCart = () => {
        setStatus(true)
        setTitle(successmessage)
        dispatch(addProductsToCart(product, user._id))
    }

    return (
        <>
            <div className="container view-product">
                <div id="demo" className="carousel slide" data-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <div className="card">
                                <h1>SHOPPERS CHOICE</h1>
                                <div className="row">
                                    <div className="col-md-6 text-center align-self-center">
                                        <img
                                            className="img-fluid"
                                            src={productImageUrl}
                                        />
                                    </div>
                                    <div className="col-md-6 info">
                                        <div className="row title">
                                            <div className="col">
                                                <h2>{productName}</h2>
                                            </div>
                                        </div>
                                        <div className="row price">
                                            <div className="row">
                                                <h3 className='product-old-price'>
                                                    <b>Old Price: ₹{oldPrice}</b>
                                                </h3>
                                            </div>
                                            <div className="row">
                                                <h3>
                                                    <b>New Price: ₹{newPrice}</b>
                                                </h3>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row lower">
                                    <div className="col text-left align-self-center">
                                        <button className="btn btn-primary" onClick={() => navigate(-1)} >Go Back</button>
                                    </div>
                                    <div className="col text-right align-self-center">
                                        <button className="btn btn-success" onClick={handleCart} >Add to cart</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <ReactjsAlert
                status={status} // true or false
                type={type} // success, warning, error, info
                title={title}
                Close={() => setStatus(false)}
            />
        </>
    )
}

export default ViewProduct

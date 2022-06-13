import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom'
import { useState } from 'react';
import { addProductToCart, getSingleProduct, addQuantity } from '../Action/action';
import '../assets/css/ViewProduct.css'


function ViewProduct() {

    const [state, setState] = useState({
        productname: "",
        category: "",
        image: "",
        oldprice: "",
        newprice: ""
    })

    let { id } = useParams();
    let dispatch = useDispatch();
    const navigate = useNavigate()

    const { product } = useSelector(state => state.data)
    const { productname, category, image, oldprice, newprice } = state;

    useEffect(() => {
        dispatch(getSingleProduct(id))
    }, [])

    useEffect(() => {
        if (product) {
            setState({ ...product })
        }
    }, [product])

    const { value } = useSelector(state => state.data)

    const handleCart = () => {
        const existingItem = value.find(item => item.id === product.id)
        console.log("existing item", existingItem)

        if (existingItem) {
            const id = existingItem.id
            dispatch(addQuantity(id, existingItem))
        }
        else {
            dispatch(addProductToCart(product))
        }
    }

    return (
        <>
            <div className="container view-product">
                <div id="demo" className="carousel slide" data-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <div className="card">
                                <h1>{product.category}</h1>
                                <div className="row">
                                    <div className="col-md-6 text-center align-self-center">
                                        <img
                                            className="img-fluid"
                                            src={product.image}
                                        />
                                    </div>
                                    <div className="col-md-6 info">
                                        <div className="row title">
                                            <div className="col">
                                                <h2>{product.productname}</h2>
                                            </div>
                                        </div>
                                        <div className="row price">
                                            <div className="row">
                                                <h3 className='product-old-price'>
                                                    <b>Old Price: ₹{product.oldprice}</b>
                                                </h3>
                                            </div>
                                            <div className="row">
                                                <h3>
                                                    <b>New Price: ₹{product.newprice}</b>
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

            {/* <h1>{product.productname}</h1>
      <h1>{product.category}</h1>
      <h1>{product.image}</h1>
      <h1>{product.oldprice}</h1>
      <h1>{product.newprice}</h1> */}
        </>
    )
}

export default ViewProduct

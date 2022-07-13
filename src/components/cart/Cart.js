import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addProductsToCart, loadNewProducts, removeFromCart, subProductQuantity, viewUserCart } from '../../action/action'
import '../../assets/css/Cart.css'
import { Link } from 'react-router-dom'
import jwtDecode from 'jwt-decode'

class Cart extends Component {
    constructor(props) {
        super(props)
        this.handleRemoveCart = this.handleRemoveCart

    }

    componentDidMount() {
        if (localStorage.getItem('token')) {
            const token = jwtDecode(localStorage.getItem("token"))
            console.log("user id : ", token.id)
            this.props.viewUserCart(token.id)
        }
    }

    // componentDidUpdate() {
    //     const token = jwtDecode(localStorage.getItem("token"))
    //     console.log("user id : ", token.id)
    //     this.props.viewUserCart(token.id)
    // }

    render() {

        const userCart = this.props.cart.userCart
        console.log("userCart : ", userCart)
        let quantity = 0
        userCart && userCart.map(pro => {
            quantity++
            console.log("User's Product : " + pro.productId.productName)
        })
        console.log("user product length: ", quantity)

        const getTotal = (items) => {

            console.log("ITEM : ", items)

            var totalPrice = 0;

            items.forEach(element => {
                console.log("single price : ", parseFloat(element.productId.newPrice.replace(",", "")))
                totalPrice += element.quantity * parseFloat(element.productId.newPrice.replace(",", ""))
            });

            return totalPrice
        }

        const addProductQuantity = (product) => {
            console.log("user Id", product.userId)
            console.log("product Id : ", product.productId)

            this.props.addProductsToCart(product.productId, product.userId)
            window.location.reload(false)
        }

        const subQuantity = (product) => {
            console.log("IN SUB")
            // product.quantity > 1 && this.props.subQuantity(product.id, product)
            if (product.quantity > 1)
                this.props.subProductQuantity(product.productId, product.userId)
            window.location.reload(false)
        }

        const handleRemoveCart = (id) => {
            console.log("remove cart called", id)

            this.props.removeFromCart(id)
            window.location.reload(false)
        }

        return (
            <>
                <div className="card cart-body">
                    <div className="row">
                        <div className="col-md-8 cart">
                            <div className="title">
                                <div className="row">
                                    <div className="col">
                                        <h4>
                                            <b>Your Shopping Cart</b>
                                        </h4>
                                        <div className="back-to-shop">
                                            <a >←</a>
                                            <Link to={-1}><span className="text-muted"  >Back to shop</span> </Link>
                                        </div>
                                    </div>
                                    <div className="col align-self-center text-right text-muted">
                                        {quantity === 0 ? "Cart is Empty"
                                            : `${quantity} item shipped at checkout`
                                        }
                                    </div>
                                </div>
                            </div>
                            {
                                userCart && userCart.map((product) => {
                                    return (
                                        <div className="row border-top border-bottom" key={product.productId._id}>
                                            <div className="row main align-items-center">
                                                <div className="col-2">
                                                    <img className="img-fluid" src={product.productId.productImageUrl} />
                                                </div>
                                                <div className="col">
                                                    <div className="row">{product.productId.productName}</div>
                                                </div>
                                                <div className="col">
                                                    <a onClick={() => subQuantity(product)} >-</a>
                                                    <a className="border quantity">
                                                        {product.quantity}
                                                    </a>
                                                    <a onClick={() => addProductQuantity(product)}>+</a>
                                                </div>
                                                <div className="col">
                                                    {product.quantity * parseFloat(product.productId.newPrice.replace(",", ""))}
                                                    <span className="close" onClick={() => handleRemoveCart(product._id)} >✕</span>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                        <div className="col-md-4 summary">
                            <div>
                                <h1>
                                    <b>Summary</b>
                                </h1>
                            </div>
                            <hr />
                            <div className="row">
                                <div className="col" style={{ paddingLeft: 0 }}>
                                    <h4>ITEMS {quantity}</h4>
                                </div>
                            </div>
                            <h2 className='mt-5' >Shipping</h2>
                            <hr />
                            <ul>
                                <h4 className='mt-5' >{quantity !== 0 && "Shipping Charge : ₹ 100"}</h4>
                                <h4 className='mt-5' >{quantity !== 0 && "Product Tax : ₹ 65"}</h4>
                                <h4 className='mt-5' >{quantity !== 0 && "G.S.T : ₹ 20"}</h4>
                            </ul>
                            <div
                                className="row "
                                style={{ borderTop: "1px solid rgba(0,0,0,.1)", padding: "2vh 0" }}
                            >
                                <h1 className="col">TOTAL PRICE</h1>
                                <h1 className="col text-right">₹ {quantity !== 0 ? `${getTotal(userCart) + 100 + 65 + 20}` : "0"}</h1>
                            </div>
                            <button className="btn mb-4">CHECKOUT</button>
                        </div>
                    </div>
                </div>

            </>
        )
    }
}

const mapStateToProps = state => {
    return {
        value: state.data,
        cart: state.data.cart
    }
}

const mapDispatchToProps = dispatch => {
    return {
        viewUserCart: (id) => dispatch(viewUserCart(id)),
        removeFromCart: (id) => dispatch(removeFromCart(id)),
        addProductsToCart: (id, product) => dispatch(addProductsToCart(id, product)),
        subProductQuantity: (id, product) => dispatch(subProductQuantity(id, product))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart) 

import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addQuantity, removeProductFromCart, subQuantity } from '../redux/action'
import '../assets/css/Cart.css'
import { Link } from 'react-router-dom'

class Cart extends Component {
    constructor(props) {
        super(props)
        this.handleRemoveCart = this.handleRemoveCart

    }

    render() {

        console.log("value : ", this.props.value)
        let cartProducts = this.props.value.value

        console.log("cart product : ", cartProducts)

        const getTotal = (items) => {

            var totalPrice = 0;

            items.forEach(element => {
                console.log("single price : ", parseFloat(element.newprice.replace(",", "")))
                totalPrice += element.quantity * parseFloat(element.newprice.replace(",", ""))
            });

            return totalPrice
        }

        const addProductQuantity = (product) => {
            console.log("add product quantity")

            this.props.addQuantity(product.id, product)
        }

        const subProductQuantity = (product) => {
            product.quantity > 1 && this.props.subQuantity(product.id, product)
        }

        const handleRemoveCart = (id) => {
            console.log("remove cart called", id)

            this.props.removeFromCart(id)
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
                                        {cartProducts.length === 0 ? "Cart is Empty"
                                            : `${cartProducts.length} item shipped at checkout`
                                        }
                                    </div>
                                </div>
                            </div>
                            {
                                cartProducts.map((product) => {
                                    return (
                                        <div className="row border-top border-bottom" key={product.id}>
                                            <div className="row main align-items-center">
                                                <div className="col-2">
                                                    <img className="img-fluid" src={product.image} />
                                                </div>
                                                <div className="col">
                                                    <div className="row text-muted">{product.category}</div>
                                                    <div className="row">{product.productname}</div>
                                                </div>
                                                <div className="col">
                                                    <a onClick={() => subProductQuantity(product)} >-</a>
                                                    <a className="border quantity">
                                                        {product.quantity}
                                                    </a>
                                                    <a onClick={() => addProductQuantity(product)}>+</a>
                                                </div>
                                                <div className="col">
                                                    {product.quantity * parseFloat(product.newprice.replace(",", ""))} 
                                                    <span className="close" onClick={() => handleRemoveCart(product.id)} >✕</span>
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
                                    <h4>ITEMS {cartProducts.length}</h4>
                                </div>
                            </div>
                            <h2 className='mt-5' >Shipping</h2>
                            <hr />
                            <ul>
                                <h4 className='mt-5' >{cartProducts.length !== 0 && "Shipping Charge : ₹ 100"}</h4>
                                <h4 className='mt-5' >{cartProducts.length !== 0 && "Product Tax : ₹ 65"}</h4>
                                <h4 className='mt-5' >{cartProducts.length !== 0 && "G.S.T : ₹ 20"}</h4>
                            </ul>
                            <div
                                className="row "
                                style={{ borderTop: "1px solid rgba(0,0,0,.1)", padding: "2vh 0" }}
                            >
                                <h1 className="col">TOTAL PRICE</h1>
                                <h1 className="col text-right">₹ {cartProducts.length !== 0 ? `${getTotal(cartProducts)+100+65+20}` : "0"}</h1>
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
        value: state.data
    }
}

const mapDispatchToProps = dispatch => {
    return {
        removeFromCart: (id) => dispatch(removeProductFromCart(id)),
        addQuantity: (id, product) => dispatch(addQuantity(id, product)),
        subQuantity: (id, product) => dispatch(subQuantity(id, product))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart) 

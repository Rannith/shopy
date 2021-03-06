import React, { Component } from 'react'
import '../../assets/css/NewProducts.css'
import { addProductsToCart, loadNewProducts, loadPopularProducts } from '../../action/action'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import jwtDecode from 'jwt-decode'
import ReactjsAlert from 'reactjs-alert'

export class NewProducts extends Component {

    constructor(props) {
        super(props)
        this.state = {
            status: false,
            type: "success",
            title: ""
        }
    }

    componentDidMount() {

        this.props.loadPopularProducts();
        this.props.loadNewProducts()
        if (this.props.successmessage.successmessage !== "Successfully Login" && this.props.successmessage.successmessage !== "") {
            this.setState({
                status: true,
                type: "success",
                title: this.props.successmessage.successmessage
            })
        }
    }

    // componentDidUpdate() {
    //     if(this.props.successmessage.successmessage !== "Successfully Login" && this.props.successmessage.successmessage !== "") {
    //         this.setState({
    //             status: true,
    //             type: "success",
    //             title: this.props.successmessage.successmessage
    //         })
    //     }
    // }

    render() {

        const newProduct = this.props.products.newproducts.products;
        const popularProduct = this.props.products.popularproducts.products;

        const handleCart = async (product) => {
            await this.setState({
                status: true,
                type: "success",
                title: this.props.successmessage.successmessage
            }, () => {
                if (this.props.successmessage.successmessage !== "Successfully Login" && this.props.successmessage.successmessage !== "") {
                    this.setState({
                        status: true,
                        type: "success",
                        title: this.props.successmessage.successmessage
                    })
                }
            })
            const token = jwtDecode(localStorage.getItem("token"))
            this.props.addProductsToCart(product, token.id)
        }

        return (
            <div>
                <section className="section-products">
                    <div className="container">
                        <div className="row justify-content-center text-center">
                            <div className="col-md-8 col-lg-6">
                                <div className="header">
                                    <h3>Best Seller</h3>
                                    <h2>Popular Products</h2>
                                </div>
                            </div>
                        </div>
                        {/* Popular Product */}
                        <div className="row">
                            {
                                popularProduct && popularProduct.slice(0, 4).map((product) => {
                                    return (
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
                                                    </h5>
                                                    <h5 className="product-old-price">Old Price: ???{product.oldPrice}</h5>
                                                    <h5 className="product-price">New Price: ???{product.newPrice}</h5>
                                                    <div className="d-flex align-items-center justify-content-between rounded-pill bg-light px-3 py-2 mt-4">
                                                        <Link to={`/viewproduct/${product._id}`} ><button className='btn btn-primary' >View Product</button></Link>
                                                        <button className='btn btn-success' onClick={() => handleCart(product)}>Add to Cart</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                            {/* New Product */}
                            <div className="row justify-content-center text-center">
                                <div className="col-md-8 col-lg-6">
                                    <div className="header">
                                        <h3>something New has been arrived <strong>Grab Soon!!</strong></h3>
                                        <h1>New Arrivals</h1>
                                    </div>
                                </div>
                            </div>
                            {
                                newProduct && newProduct.slice(0, 4).map((product) => {
                                    return (
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
                                                    </h5>
                                                    <h5 className="product-old-price">Old Price: ???{product.oldPrice}</h5>
                                                    <h5 className="product-price">New Price: ???{product.newPrice}</h5>
                                                    <div className="d-flex align-items-center justify-content-between rounded-pill bg-light px-3 py-2 mt-4">
                                                        <Link to={`/viewproduct/${product._id}`} ><button className='btn btn-primary' >View Product</button></Link>
                                                        <button className='btn btn-success' onClick={() => handleCart(product)}>Add to Cart</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </section>
                <ReactjsAlert
                    status={this.state.status}
                    type={this.state.type}
                    title={this.state.title}
                    Close={() => this.setState({ status: false })}
                />
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        products: state.data,
        successmessage: state.data
    }
}

const mapDispatchToProps = dispatch => {
    return {
        loadNewProducts: () => dispatch(loadNewProducts()),
        loadPopularProducts: () => dispatch(loadPopularProducts()),
        addProductsToCart: (id, product) => dispatch(addProductsToCart(id, product))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NewProducts)

import React, { Component } from 'react'
import '../assets/css/NewProducts.css'
import { addProductToCart, loadNewProducts, loadPopularProducts, addQuantity } from '../Action/action'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

export class NewProducts extends Component {

    constructor(props) {
        super(props)
        this.state = {
            size: "contain"
        }
    }

    componentDidMount() {

        this.props.loadPopularProducts();
        this.props.loadNewProducts()
    }

    render() {


        const newProduct = this.props.products.newproducts;
        const popularProduct = this.props.products.popularproducts;
        let size = "contain";

        console.log("New product : ", newProduct);
        console.log("Popular Product : ", popularProduct);

        newProduct.slice(0, 4).map((item) => {
            console.log("item : ", item)
        })

        const handleCart = (product) => {
            console.log("in handle cart")

            const value = this.props.value.value;

            console.log(value)

            const existingItem = value.find(item => item.id === product.id)
            console.log("existing item", existingItem)

            if (existingItem) {
                const id = existingItem.id
                this.props.addQuantity(id, existingItem)
            }
            else {
                this.props.addProductToCart(product);
            }
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
                                popularProduct.slice(0, 4).map((product) => {
                                    return (
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
                                                    <Link to={`/viewproduct/${product.id}`} ><button className='btn btn-primary' >View Product</button></Link>
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
                                newProduct.slice(0, 4).map((product) => {
                                    return (
                                        // <div className="col-md-6 col-lg-4 col-xl-3" key={product.id}>
                                        //     <div id="product" className="single-product">
                                        //         {
                                        //             product.category === "shoe" ?
                                        //                 size = "60%" : size = "contain"
                                        //         }
                                        //         <div className="part-1" style={{
                                        //             backgroundImage: `url("${product.image}")`,
                                        //             backgroundSize: `${size}`,
                                        //             backgroundRepeat: 'no-repeat',
                                        //             // backgroundPosition: 'center'

                                        //         }}>
                                        //             <ul>
                                        //                 <li><a onClick={() => handleCart(product)} ><i className="fas fa-shopping-cart"></i></a></li>
                                        //                 <Link to={`/viewproduct/${product.id}`} ><li><a href="#"><i className="fas fa-expand"></i></a></li></Link>
                                        //             </ul>
                                        //         </div>
                                        //         <div className="part-2">
                                        //             <h3 className="product-title">{product.productname}</h3>
                                        //             <h4 className="product-old-price">₹{product.oldprice}</h4>
                                        //             <h4 className="product-price">₹{product.newprice}</h4>
                                        //         </div>
                                        //     </div>
                                        // </div>
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
                                                    <Link to={`/viewproduct/${product.id}`} ><button className='btn btn-primary' >View Product</button></Link>
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
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        products: state.data,
        value: state.data
    }
}

const mapDispatchToProps = dispatch => {
    return {
        loadNewProducts: () => dispatch(loadNewProducts()),
        loadPopularProducts: () => dispatch(loadPopularProducts()),
        addQuantity: (id, product) => dispatch(addQuantity(id, product)),
        addProductToCart: (product) => dispatch(addProductToCart(product))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NewProducts)

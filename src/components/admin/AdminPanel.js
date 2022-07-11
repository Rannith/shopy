import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { deleteProduct, loadProducts } from '../../action/action';
import '../../assets/css/AdminPanel.css'

function AdminPanel() {

    let dispatch = useDispatch();
    let navigate = useNavigate();

    useEffect(() => {
        dispatch(loadProducts());
    }, [])

    const { products } = useSelector(state => state.data.products);

    const handleDelete = (id) => {
        dispatch(deleteProduct(id))
    }

    const handleLogout = () => {
        localStorage.removeItem("token");

        navigate('/')
    }

    return (
        <>
            <div className="container-fluid admin-panel">
                <div className="px-lg-5">
                    <div className="row py-5">
                        <div className="col-lg-12 mx-auto">
                            <div className="text-white p-5 shadow-sm rounded banner">
                                <h1 className="display-4">Welcome Admin</h1>
                                <p className="lead">You have fully access on products Add, Delete and Edit.</p>
                                <p className="lead">
                                    <button className='btn btn-success' onClick={() => navigate('/addproduct')} >Add Products</button><br />
                                    <button className='btn btn-warning mt-3' onClick={handleLogout} >Log out</button>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        {/* Gallery item */}
                        {
                           products && products.map((product) => {
                                return (
                                    <div className="col-xl-3 col-lg-4 col-md-6 mb-4 admin-product" key={product._id}>
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
                                                <h5 className="product-old-price">Old Price: ₹{product.oldPrice}</h5>
                                                <h5 className="product-price">New Price: ₹{product.newPrice}</h5>
                                                <div className="d-flex align-items-center justify-content-between rounded-pill bg-light px-3 py-2 mt-4">
                                                    <button className='btn btn-warning' onClick={() => navigate(`/editproduct/${product._id}`)}>Edit Product</button>
                                                    <button className='btn btn-danger' onClick={() => handleDelete(product._id)}>Delete Product</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>

        </>
    )
}

export default AdminPanel

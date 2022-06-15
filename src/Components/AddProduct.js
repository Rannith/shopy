import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addProduct } from '../Action/action';
import '../assets/css/Register.css'

function AddProduct() {

    const [state, setState] = useState({
        productname: "",
        category: "",
        image: "",
        oldprice: "",
        newprice: "",
        quantity: 1,
        producttype: "",
    })

    const { productname, category, image, oldprice, newprice, producttype } = state;

    let dispatch = useDispatch();
    let navigate = useNavigate();

    const validate = () => {
        let data = document.querySelectorAll('.form-control');

        console.log("Fields :", data)

        let flag = 0;

        data.forEach(element => {
            if (element.value === "") {
                element.classList.add('is-invalid')
                flag -= 1;
            }
            else {
                element.classList.remove('is-invalid')
                flag += 1;
            }
        });

        if (flag === 6) {
            return true
        }
        else {
            return false
        }
    }

    const handleChange = (e) => {
        let { name, value } = e.target;
        setState({ ...state, [name]: value });
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        console.log("state :", state)

        if (validate()) {
            dispatch(addProduct(state))
            navigate('/adminpanel')
        }

    }

    return (
        <>
            <main className='page-auth'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-lg-10 offset-lg-1'>
                            <section className='auth-wrapper'>
                                <button className='btn btn-primary mb-5' onClick={() => navigate(-1)} ><i className="fa fa-arrow-left" aria-hidden="true"></i> Go back</button>
                                <div className='row'>
                                    <div className='col-md-6 mb-4 mb-md-0'>
                                        <h2 className='auth-section-title'>Add Product</h2>
                                        <p className='auth-section-subtitle'>Add correct product, only if user can choose</p>
                                        <form action='#' method='POST' onSubmit={handleSubmit} >
                                            <div className='form-group'>
                                                <label htmlFor='productname'>Product Name<sup>*</sup></label>
                                                <input type='text' className='form-control' id='productname' name='productname' placeholder='Product Name' value={productname} onChange={handleChange} />
                                                <strong className='invalid-feedback' >Enter Data</strong>
                                            </div>
                                            <div className='form-group'>
                                                <label htmlFor='category'>Category<sup>*</sup></label>
                                                {/* <input type='text' className='form-control' id='category' name='category' placeholder='Category' value={category} onChange={handleChange} /> */}
                                                <select class="form-control" aria-label="Default select example" name='category' value={category} onChange={handleChange}>
                                                    <option value="" selected>Open this, select Category of Product</option>
                                                    <option value="tshirt">T-Shirt</option>
                                                    <option value="suit">Suit / Blazer</option>
                                                    <option value="shoe">Shoe / Sandles</option>
                                                    <option value="watch">Watch</option>
                                                </select>
                                                <strong className='invalid-feedback' >Enter Data</strong>
                                            </div>
                                            <div className='form-group'>
                                                <label htmlFor='image'>Image URL<sup>*</sup></label>
                                                <input type='text' className='form-control' id='image' name='image' placeholder='Image URL' value={image} onChange={handleChange} />
                                                <strong className='invalid-feedback' >Enter Data</strong>
                                            </div>
                                            <div className='form-group'>
                                                <label htmlFor='productType'>Product Type<sup>*</sup></label>
                                                <select class="form-control" aria-label="Default select example" name='producttype' value={producttype} onChange={handleChange}>
                                                    <option value="" selected>Open this, select Type of Product</option>
                                                    <option value="newproduct">New Product</option>
                                                    <option value="popularproduct">Popular Product</option>
                                                    <option value="regularproduct">Regular Product</option>
                                                </select>
                                                <strong className='invalid-feedback' >Select Type</strong>
                                            </div>
                                            <div className='form-group'>
                                                <label htmlFor='oldprice'>Old Price<sup>*</sup></label>
                                                <input type='text' className='form-control' id='oldprice' name='oldprice' placeholder='Old Price' min={0} value={oldprice} onChange={handleChange} />
                                                <strong className='invalid-feedback' >Enter Data</strong>
                                            </div>
                                            <div className='form-group'>
                                                <label htmlFor='newprice'>New Price<sup>*</sup></label>
                                                <input type='text' className='form-control' id='newprice' name='newprice' placeholder='New Price' min={0} value={newprice} onChange={handleChange} />
                                                <strong className='invalid-feedback' >Enter Data</strong>
                                            </div>
                                            <button className='btn btn-primary btn-auth-submit' type='submit'>Add Product</button>
                                        </form>
                                    </div>
                                    <div className="col-md-6 d-flex align-items-center">
                                        <img src="https://images.unsplash.com/photo-1490114538077-0a7f8cb49891?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt="Add Product" className="img-fluid" width="500rem" />
                                    </div>
                                </div>
                            </section>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}

export default AddProduct

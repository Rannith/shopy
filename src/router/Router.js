import React from 'react'
import { Route, Routes } from 'react-router-dom';
import { useSelector } from 'react-redux';
import EditUser from '.././components/profile/EditUser';
import Home from '.././components/home/Home';
import Login from '.././components/home/Login';
import Register from '.././components/home/Register';
import ViewProfile from '.././components/profile/ViewProfile';
import Admin from '.././components/admin/Admin';
import AdminPanel from '.././components/admin/AdminPanel';
import AddProduct from '.././components/admin/AddProduct';
import EditProduct from '.././components/admin/EditProduct';
import Products from '.././components/product/Products';
import ViewProduct from '.././components/product/ViewProduct';
import Cart from '../components/cart/Cart'
import ValidateSession from '.././container/utils/ValidateSession';


function Router() {

    ValidateSession()

    return (
        <>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='register' element={<Register />} />
                <Route path='login' element={<Login />} />
                <Route path='editProfile/:id' element={<EditUser />} />
                <Route path='viewprofile' element={<ViewProfile />} />
                <Route path='admin' element={<Admin />} />
                <Route path='adminPanel' element={<AdminPanel />} />
                <Route path='addproduct' element={<AddProduct />} />
                <Route path='editproduct/:id' element={<EditProduct />} />
                <Route path='products' element={<Products />} />
                <Route path='viewproduct/:id' element={<ViewProduct />} />
                <Route path='cart' element={<Cart />} />
            </Routes>
        </>
    )
}

export default Router

import React from 'react'
import { Route, Routes } from 'react-router-dom';
import EditUser from '../profile/EditUser';
import Home from '../home/Home';
import Login from '../home/Login';
import Register from '../home/Register';
import ViewProfile from '../profile/ViewProfile';
import Admin from '../admin/Admin';
import AdminPanel from '../admin/AdminPanel';
import AddProduct from '../admin/AddProduct';
import EditProduct from '../admin/EditProduct';
import Products from '../product/Products';
import ViewProduct from '../product/ViewProduct';
import Cart from '../cart/Cart'
import ValidateSession from '../utiles/ValidateSession';


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

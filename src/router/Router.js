import React from 'react'
import { Route, Routes } from 'react-router-dom';
import EditUser from '../Components/EditUser';
import Home from '../Components/Home';
import Login from '../Components/Login';
import Register from '../Components/Register';
import ViewProfile from '../Components/ViewProfile';
import Admin from '../Components/Admin';
import AdminPanel from '../Components/AdminPanel';
import AddProduct from '../Components/AddProduct';
import EditProduct from '../Components/EditProduct';
import Products from '../Components/Products';
import ViewProduct from '../Components/ViewProduct';
import Cart from '../Components/Cart'
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

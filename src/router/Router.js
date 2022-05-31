import React,{ useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { Route, Routes, useNavigate } from 'react-router-dom';
import { loadUsers } from '../redux/action';
import EditUser from '../pages/EditUser';
import Home from '../pages/Home';
import Login from '../pages/Login';
import Register from '../pages/Register';
import CryptoJS from 'crypto-js';
import ViewProfile from '../pages/ViewProfile';
import Admin from '../pages/Admin';
import AdminPanel from '../pages/AdminPanel';
import AddProduct from '../pages/AddProduct';
import EditProduct from '../pages/EditProduct';
import Products from '../pages/Products';
import ViewProduct from '../pages/ViewProduct';


function Router() {

    const navigate = useNavigate()

    console.log('YES IM')

    let dispatch = useDispatch();

    useEffect(() => {
        dispatch(loadUsers())
    }, [])

    const { users } = useSelector(state => state.data)

    const decryptToken = () => {

        if (!localStorage.getItem("token")) {
            return false;
        }

        var encryptData = localStorage.getItem("token");

        console.log("encrypt data :", encryptData);

        var bytes = CryptoJS.AES.decrypt(encryptData, "qwertyuiop");
        var decryptedData = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));

        console.log("Original data :", decryptedData);

        return decryptedData;
    }

    const validateSession = () => {

        let url = window.location.href;

        if (url.indexOf('login') > -1 || url.indexOf('register') > -1 || url.indexOf('admin') > -1 || url === 'http://localhost:3000/') {
            return true
        }

        if (decryptToken()) {
            let data = decryptToken();

            let exp = data.currentTime;
            let time = new Date()
            if (time.getHours > (exp + 1)) {
                localStorage.removeItem("token");
                return false
            }
            else {
                return true
            }
        }
        else {
            return false
        }
    }

    useEffect(() => {
        if (!validateSession()) {
            navigate('/login')
        }
    })

    return (
        <>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='register' element={<Register />} />
                <Route path='login' element={<Login />} />
                <Route path='editProfile/:id' element={<EditUser />} />
                <Route path='viewProfile' element={<ViewProfile />} />
                <Route path='admin' element={<Admin />} />
                <Route path='adminPanel' element={<AdminPanel />} />
                <Route path='addproduct' element={<AddProduct />} />
                <Route path='editproduct/:id' element={<EditProduct />} />
                <Route path='products' element={<Products />} />
                <Route path='viewproduct/:id' element={<ViewProduct />} />
            </Routes>
        </>
    )
}

export default Router

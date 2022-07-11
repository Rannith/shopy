import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import CryptoJS from 'crypto-js';
import { getSingleUser, loadUsers, setLoggedOut } from '../../action/action';
import '../../assets/css/ViewProfile.css';
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { KEY } from '../../container/constant/index'
import jwtDecode from 'jwt-decode';
import { viewProfile, setLoggedIn } from '../../action/action';

function ViewProfile() {

    let dispatch = useDispatch();
    const navigate = useNavigate();

    const token = jwtDecode(localStorage.getItem("token"))
    const { user } = useSelector(state => state.data.user)
    const { isLogin } = useSelector((state) => state.data)

    useEffect(() => {
        if (localStorage.getItem("token")) {
            dispatch(viewProfile(token.id))
            dispatch(setLoggedIn())
        }
    }, [isLogin])

    console.log("USER VP email ... : ", user);

    // const decryptToken = () => {

    //     if (!localStorage.getItem("token")) {
    //         return false;
    //     }

    //     let encryptData = localStorage.getItem("token");

    //     let bytes = CryptoJS.AES.decrypt(encryptData, KEY);
    //     let decryptedData = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));

    //     return decryptedData;
    // }

    // let loginCredentials = decryptToken();

    // const { users } = useSelector(state => state.data)

    // console.log("VP users", users)

    // let profile = users.find((index) => index.email === loginCredentials.email && index.password === loginCredentials.password)
    // console.log('VP Profile : ', profile)

    const [state, setState] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        password: "",
        id: ""
    })

    console.log("state in VP :", state)

    const { firstName, lastName, email, phone, password, _id } = state;

    useEffect(() => {
        console.log("IN ANOTHER USE EFFECT")
        if (user) {
            setState({ ...user });
        }
    }, [user])

    console.log("Email : ", state.email)

    const handleLogout = () => {
        localStorage.removeItem("token");
        dispatch(setLoggedOut())
        navigate('/')
    }

    return (    
        <>
            <div className='view-profile'>
                <div className="container rounded bg-white mt-5">
                    <div className="row profile-card">
                        <div className="col-md-4 border-right">
                            <div className="d-flex flex-column align-items-center text-center p-3 py-5">
                                <img
                                    className="rounded-circle mt-5"
                                    src="https://openclipart.org/image/2400px/svg_to_png/247319/abstract-user-flat-3.png"
                                    width={90}
                                />
                                <h2 className="font-weight-bold">{firstName}</h2>
                                <h4>{lastName}</h4>
                            </div>
                        </div>
                        <div className="col-md-8">
                            <div className="p-3 py-5">
                                <div className="d-flex justify-content-between align-items-center mb-3">
                                    <div className="d-flex flex-row align-items-center back">
                                        <i className="fa fa-long-arrow-left mr-1 mb-1" />
                                        <NavLink to={-1}><a>Back to home</a></NavLink> 
                                    </div>
                                    <button className="text-right btn btn-primary" onClick={() => navigate(`/editProfile/${_id}`)}>Edit Profile</button>
                                </div>
                                <div className="row mt-2">
                                    <div className="col-md-12">
                                        <h4>Email :</h4>
                                    </div><br />
                                    <div className="col-md-6">
                                        <h4>{email}</h4>
                                    </div>
                                </div>
                                <div className="row mt-3">
                                    <div className="col-md-12">
                                        <h4>Phone Number :</h4>
                                    </div><br />
                                    <div className="col-md-6">
                                        <h4>{phone}</h4>
                                    </div>
                                </div>
                                <div className="row mt-3">
                                <div className="col-md-12">
                                        <h4>Profile Id :</h4>
                                    </div><br />
                                    <div className="col-md-6">
                                        <h4>{_id}</h4>
                                    </div>
                                </div>
                                <div className="mt-5 text-right">
                                    <button className="btn btn-light btn-lg action-button mb-5" type="button" onClick={handleLogout}>
                                        Log Out
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ViewProfile

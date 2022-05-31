import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import CryptoJS from 'crypto-js';
import { loadUsers } from '../redux/action';
import '../assets/css/ViewProfile.css';
import { Link, useNavigate } from 'react-router-dom'

function ViewProfile() {

    let dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        dispatch(loadUsers())
    }, [])

    const decryptToken = () => {

        if (!localStorage.getItem("token")) {
            return false;
        }

        var encryptData = localStorage.getItem("token");

        var bytes = CryptoJS.AES.decrypt(encryptData, "qwertyuiop");
        var decryptedData = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));

        return decryptedData;
    }

    let loginCredentials = decryptToken();

    const { users } = useSelector(state => state.data)

    console.log("VP users", users)

    let profile = users.find((index) => index.email === loginCredentials.email && index.password === loginCredentials.password)
    console.log('VP Profile : ', profile)

    const [state, setState] = useState({
        name: "",
        email: "",
        phone: "",
        password: "",
        id: ""
    })

    console.log("state in VP :", state)

    const { name, email, phone, password, id } = state;

    useEffect(() => {
        if (profile) {
            setState({ ...profile });
        }
    }, [profile])

    const handleLogout = () => {
        localStorage.removeItem("token");
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
                                <h2 className="font-weight-bold">{name}</h2>
                                <h4>India</h4>
                            </div>
                        </div>
                        <div className="col-md-8">
                            <div className="p-3 py-5">
                                <div className="d-flex justify-content-between align-items-center mb-3">
                                    <div className="d-flex flex-row align-items-center back">
                                        <i className="fa fa-long-arrow-left mr-1 mb-1" />
                                        <Link to='/'><a>Back to home</a></Link> 
                                    </div>
                                    <button className="text-right btn btn-primary" onClick={() => navigate(`/editProfile/${id}`)}>Edit Profile</button>
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
                                        <h4>{id}</h4>
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

        // <>
        //     <h1>This is profile View Page</h1>
        //     <h2>Name : {name}</h2>
        //     <h2>Email : {email}</h2>
        //     <h2>Phone : {phone}</h2>
        //     <button className='btn btn-warning' >Edit Profile</button>
        //     <button className='btn btn-danger'>Delete Profile</button>
        //     <button className='btn btn-primary'>Logout</button>
        // </>
    )
}

export default ViewProfile

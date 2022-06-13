import React,{ useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { Route, Routes, useNavigate } from 'react-router-dom';
import { loadUsers } from '../Action/action';
import CryptoJS from 'crypto-js';

function ValidateSession() {

    const navigate = useNavigate()

    console.log('Validate Session called')

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

}

export default ValidateSession

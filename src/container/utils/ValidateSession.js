import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

function ValidateSession() {

    const navigate = useNavigate()

    const ValidateSession = () => {
        
        console.log("IN SESSION VALSIDATION")

        let url = window.location.href;

        if (url.indexOf('login') > -1 || url.indexOf('register') > -1 || url.indexOf('admin') > -1 || url === 'http://localhost:3000/') {
            return true
        }

        console.log(localStorage.getItem('token'))

        if (localStorage.getItem("token"))
            return true
        else {
            return false
        }
    }

    useEffect(() => {
        if (!ValidateSession()) {
            navigate('/login')
        }
    })

}

export default ValidateSession
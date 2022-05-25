import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logout, selectUser } from '../feature/UserSlice';


function Home() {

    const user = useSelector(selectUser);

    const dispatch = useDispatch();

    const handleLogout = e => {
        e.preventDefault();

        dispatch(logout());
    }

    return (
        <>
            <h1>Welcome, {user.name}</h1>
            <button onClick={handleLogout} >Logout</button>
        </>
    )
}

export default Home

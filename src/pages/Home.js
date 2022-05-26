import React,{ useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { deleteUser, loadUsers } from '../redux/action';

function Home() {

    let dispatch = useDispatch();
    const { users } = useSelector(state => state.data)

    useEffect(() => {
        dispatch(loadUsers())
    }, [])

    const handleDelete = (id) => {
        if(window.confirm("Are you sure wanted to delete the user ?")) {
            dispatch(deleteUser(id))
        }
    }

  return (
    <>
      <h1>Welcome Youu...</h1>
      <Link to="/register"><button>Sign up</button></Link>
      {/* {
          users.map((user) => (<ul key={user.id}>
              <li>{user.name}</li>
              <li>{user.email}</li>
              <li>{user.phone}</li>
              <li>{user.password}</li>
              <li><button onClick={() => handleDelete(user.id)} >Delete</button></li>
              <li><button>Edit</button></li>
          </ul>))    
      } */}
    </>
  )
}

export default Home


//----------------------------------------------------------------------------------------------------
// import React from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { logout, selectUser } from '../../../feature/UserSlice';


// function Home() {

//     const user = useSelector(selectUser);

//     const dispatch = useDispatch();

//     const handleLogout = e => {
//         e.preventDefault();

//         dispatch(logout());
//     }

//     return (
//         <>
//             <h1>Welcome, {user.name}</h1>
//             <button onClick={handleLogout} >Logout</button>
//         </>
//     )
// }

// export default Home

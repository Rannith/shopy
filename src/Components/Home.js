import React,{ useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { deleteUser, loadUsers } from '../Action/action';
import Header from './Header';
import CategoryCard from './CategoryCard';
import NewProducts from './NewProducts';
import Footer from './Footer';


function Home() {

    let dispatch = useDispatch();
    const { users } = useSelector(state => state.data)
    // const { user } = useSelector(state => state.auth)

    // console.log("home user", user)

    useEffect(() => {
        dispatch(loadUsers())
    }, [])

    const handleDelete = (id) => {
        if(window.confirm("Are you sure wanted to delete the user ?")) {
            dispatch(deleteUser(id))
        }
    }

    const navigate = useNavigate();

  return (
    <>
      <Header />
      <CategoryCard />
      <NewProducts />
      <Footer />
    </>
  )
}

export default Home

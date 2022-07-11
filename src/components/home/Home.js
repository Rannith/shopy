import React,{ useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { deleteUser, loadUsers } from '../../action/action';
import Header from '../shared/Header';
import CategoryCard from './CategoryCard';
import NewProducts from './NewProducts';
import Footer from '../shared/Footer';


function Home() {

    let dispatch = useDispatch();

    useEffect(() => {
        dispatch(loadUsers())
    }, [])

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

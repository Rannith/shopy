import { useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import './App.css';
// import { selectUser } from '../../feature/UserSlice';
import Header from './pages/Header';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';

function App() {

  // const user = useSelector(selectUser);
  // console.log(user)

  return (
    <>
      {/* {
        user? <Home /> : <Register />
      }
      <Login /> */}
      {/* <Routes>
        <Route path='/' element={<Register />} />
        <Route path='login' element={<Login />} />
        <Route path='home' element={<Home />} />
      </Routes> */}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='register' element={<Register />} />
        <Route path='login' element={<Login />} />
      </Routes>
    </>
  );
}

export default App;

import { useSelector } from 'react-redux';
import './App.css';
import { selectUser } from './feature/UserSlice';
import Header from './pages/Header';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';

function App() {

  const user = useSelector(selectUser);
  console.log(user)

  return (
    <>
      {
        user? <Home /> : <Register />
      }
    </>
  );
}

export default App;

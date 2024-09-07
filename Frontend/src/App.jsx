import Login from './components/Login';
import Register from './components/Register';
import Navbar from "./components/Navbar"
import { ToastContainer } from 'react-toastify';
import {Routes, Route} from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css'; 
import Home from './components/Home';

const App = () =>{
  return (
    <>
    <ToastContainer />
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/register' element={<Register />}/>
      
    </Routes>
    </>
  )
}

export default App;
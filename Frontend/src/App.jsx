import Login from './components/Login';
import Register from './components/Register';
import OwnerRegistration from './components/OwnerRegistration';
import Navbar from './components/Navbar';
import Home from './components/Home/index';
import { ToastContainer } from 'react-toastify';
import {Routes, Route} from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css'; 

const App = () =>{
  return (
    <>
    <ToastContainer />
    <Navbar />
    <Routes>
      {/* <Route path='/' element={<Login />}/> */}
      <Route path='/' element={<Home />} />
      {/* <Route path='/login' element={<Login />}/>
      <Route path='/registerOwner' element={<OwnerRegistration />} />
      <Route path='/register' element={<Register />}/> */}
    </Routes>
    </>
  )
}

export default App;
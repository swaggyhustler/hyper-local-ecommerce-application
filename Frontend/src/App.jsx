import Login from './components/Login';
import Register from './components/Register';
import { ToastContainer } from 'react-toastify';
import {Routes, Route} from 'react-router-dom';
const App = () =>{
  return (
    <>
    <ToastContainer />
    <Routes>
      <Route path='/' element={<Register />}/>
      <Route path='/login' element={<Login />}/>
    </Routes>
    </>
  )
}

export default App;
import Login from './components/Login';
import Register from './components/Register';
import OwnerRegistration from './components/OwnerRegistration';
import Navbar from './components/Navbar';
// import Home from './components/Home/index';
import { ToastContainer } from 'react-toastify';
import {Routes, Route, Navigate} from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css'; 
import Shops from './components/Shops';
import SearchPage from './components/SearchPage';
import ShopDetails from './components/ShopDetails';
import { useAuthStore } from './store/authStore';
import { useEffect } from 'react';

const ProtectedRoute = ({children})=>{
const {isAuthenticated} = useAuthStore();
  if(!isAuthenticated){
    return <Navigate to='/' replace/>;
  }
  return children;
}

const App = () =>{
  const {checkAuth, user, isAuthenticated} = useAuthStore();
  useEffect(()=>{
    checkAuth();
  }, [checkAuth]);
  
  console.log("is Authenticated ", isAuthenticated);
  console.log("User ", user);
  
  return (
    <>
    <ToastContainer />
    <Navbar />
    <Routes>
      <Route path='/' element={<Login />}/>
      {/* <Route path='/' element={<Home />} /> */}
        <Route path='/home' element={
          <ProtectedRoute>
            <h1>This is you home!</h1>
          </ProtectedRoute>
          }/>
      <Route path='/login' element={<Login />}/>
      <Route path='/registerOwner' element={<OwnerRegistration />} />
      <Route path='/register' element={<Register />}/> 
      <Route path='/shops' element={<Shops/>}/>
      <Route path='/search' element={<SearchPage/>}/>
      <Route path='/shopDetails' element={<ShopDetails/>}/>
    </Routes>
    </>
  )
}

export default App;
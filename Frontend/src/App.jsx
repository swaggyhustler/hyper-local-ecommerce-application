import Login from './components/Login';
import Register from './components/Register';
import OwnerRegistration from './components/OwnerRegistration';
import Navbar from './components/Navbar';
import Home from './components/Home/index';
import { ToastContainer } from 'react-toastify';
import {Routes, Route, Navigate} from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css'; 
import Shops from './components/Shops';
import SearchPage from './components/SearchPage';
import ShopDetails from './components/ShopDetails';
import Cart from './components/Cart';
import { useAuthStore } from './store/authStore';
import { useEffect } from 'react';
import VerifyEmail from './components/VerifyEmail';
import { useDispatch } from 'react-redux'; 
import {setUser} from './store/userSlice';
import Order from './components/Order';
import UserDetails from './components/UserDetails';
import RegisterShop from './components/RegisterShop';
import MyShops from './components/MyShops';
import AddProduct from './components/AddProduct';
import ShowProducts from './components/ShowProducts';

const ProtectedRoute = ({children})=>{
const {isAuthenticated, user} = useAuthStore();
  if(!isAuthenticated){
    return <Navigate to='/' replace/>;
  }
  if(!user.isVerified){
    return <Navigate to='/verify-email' replace/>;
  }
  return children;
}

const App = () =>{
  const dispatch = useDispatch();
  const {checkAuth, user} = useAuthStore();
  useEffect(()=>{
    checkAuth();
  }, [checkAuth]);
  
  useEffect(()=>{
    dispatch(setUser(user));
  }, [user, dispatch]);
  // console.log("is Authenticated ", isAuthenticated);
  // console.log("User ", user.isVerified);
  
  return (
    <>
    <ToastContainer position='top-center' autoClose={2000}/>
    <Navbar />
    <Routes>
      <Route path='/' element={<Login />}/>
      <Route path='/login' element={<Login />}/>
      <Route path='/registerOwner' element={<OwnerRegistration />} />
      <Route path='/register' element={<Register />}/> 
      <Route path='/verify-email' element={<VerifyEmail />} />
      <Route path='/home' 
        element={
          <ProtectedRoute>
            <Home />
          </ProtectedRoute>
        }
      />
      <Route path='/shops' 
        element={
          <ProtectedRoute>
            <Shops/>
          </ProtectedRoute>
        }
      />
      <Route path='/search' 
        element={
          <ProtectedRoute>
          <SearchPage/>
          </ProtectedRoute>
        }
      />
      <Route path='/shopDetails' 
        element={
          <ProtectedRoute><ShopDetails/>
          </ProtectedRoute>
        }
      />
      <Route path='/cart' 
        element={
          <ProtectedRoute>
          <Cart/>
          </ProtectedRoute>
        }
      />
      <Route path='/orders' element={
        <ProtectedRoute>
          <Order />
        </ProtectedRoute>
        } 
      />
      <Route path='/userDetails' 
        element={
          <ProtectedRoute>
            <UserDetails/>
          </ProtectedRoute>
        }
      />
      <Route path='/addShop' 
        element={
          <ProtectedRoute>
            <RegisterShop/>
          </ProtectedRoute>
        }
      />
      <Route path='/myShop' 
        element={
          <ProtectedRoute>
            <MyShops/>
          </ProtectedRoute>
        }
      />
      <Route path='/addProduct' 
        element={
          <ProtectedRoute>
            <AddProduct/>
          </ProtectedRoute>
        }
      />
      <Route path='/showProducts' 
        element={
          <ProtectedRoute>
            <ShowProducts />
          </ProtectedRoute>
        }
      />
    </Routes>
    </>
  )
}

export default App;
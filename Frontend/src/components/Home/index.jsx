import React from "react";
import Banner from "./Banner";
import ShopsSection from "./ShopsSection";
import AboutUs from "./AboutUs";
import Testimonials from "./Testimonials";
import ContactUs from "./ContactUs"
import { useEffect,useState } from "react";
import {toast} from "react-toastify"
const Home = () => {

  const [coordinates, setCoordinates] = useState({ latitude: null, longitude: null });
  const getLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setCoordinates({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          });
        },
        (error) => {
          toast.error(error.message)
        }
      );
    } else {
      console.log("error in fetching location")
    }
    
  }
  
      useEffect( ()=>{

        getLocation()
        console.log(coordinates)

      },[])

  return (
    <>
    <Banner/>
    <ShopsSection/>
    <AboutUs/>
    <Testimonials/>
    <ContactUs/>
    
      
     
    </>
  )
};

export default Home;

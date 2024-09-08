import React from "react";
import Banner from "./Banner";
import ShopsSection from "./ShopsSection";
import AboutUs from "./AboutUs";
import Testimonials from "./Testimonials";
import ContactUs from "./ContactUs"
import { useEffect,useState } from "react";
import {toast} from "react-toastify"
const Home = () => {


  const [coordinates, setCoordinates] = useState(null);
    const fetchLocation = ()=>{
        return new Promise((resolve, reject)=>{
          navigator.geolocation.getCurrentPosition((position)=>{
            resolve({
              latitude: position.coords.latitude,
              longitude: position.coords.longitude
            });
            }, (error)=>{
            console.log("E: Error getting users current locaiton");
            reject(error);
          });
        });
    }
  
    useEffect( ()=>{
        fetchLocation().then((location)=>{
          setCoordinates(location);
        });
    },[]);

    console.log(coordinates);
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

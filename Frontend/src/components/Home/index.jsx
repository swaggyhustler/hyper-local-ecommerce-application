import React from "react";
import Banner from "./Banner";
import ShopsSection from "./ShopsSection";
import AboutUs from "./AboutUs";
import Testimonials from "./Testimonials";
import ContactUs from "./ContactUs"
import { useEffect,useState } from "react";
import {toast} from "react-toastify"
const Home = () => {

  

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
